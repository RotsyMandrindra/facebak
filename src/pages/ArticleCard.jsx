import React, { useState, useEffect } from 'react';
import { Card, Button, Collapse, InputGroup, FormControl } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';

function ArticleCard({ title, content, imgSrc, userId, article, articleReactions, 
    updateArticleReactions, 
    setArticleReactions,
    }) {

    const [likes, setLikes] = useState(0);
    const [likeStatus, setLikeStatus] = useState(null);
    const [comments, setComments] = useState([]);
    const [reactionType, setReactionType] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [loadingComments, setLoadingComments] = useState(true);

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const fetchComments = async (postId) => {
        try {
            const response = await axios.get(`${apiEndpoint}/posts/${postId}/comments`);

            const fetchedComments = response.data;
            setComments(fetchedComments);
            setLoadingComments(false); // Mettre à jour l'état pour indiquer que les commentaires ont été chargés
        } catch (error) {
            console.error('Erreur lors de la récupération des commentaires', error);
            setLoadingComments(false); // En cas d'erreur, indiquer que les commentaires n'ont pas pu être chargés
        }
    };


    useEffect(() => {
        fetchReactions(article.id);
        fetchComments(article.id); // Charger les commentaires lorsque l'article est chargé
    }, []);

    const fetchReactions = async (postId) => {
        try {
            const response = await axios.get(`${apiEndpoint}/posts/${postId}/reactions`);

            const reactions = response.data;
            setArticleReactions((prevReactions) => ({
                ...prevReactions,
                [postId]: reactions,
            }));
        } catch (error) {
            console.error('Erreur lors de la récupération des réactions', error);
        }
    };

    useEffect(() => {
        fetchReactions(article.id);
    }, []);

    const handleLikeClick = async () => {
        if (reactionType === 'LIKE') {
            setLikes(likes - 1);
            setLikeStatus(null);
            setReactionType(null);
            await deleteReactionFromServer('LIKE', article.id);
        } else {
            setLikes(likes + 1);
            setLikeStatus('LIKE');
            setReactionType('LIKE');
            await saveReactionToServer('LIKE', article.id);

            // Remove dislike status if present
            if (likeStatus === 'DISLIKE') {
                await deleteReactionFromServer('DISLIKE', article.id);
            }
        }
        updateArticleReactions('LIKE');
    };


    const handleDislikeClick = async () => {
        if (likeStatus === 'DISLIKE') {
            setLikes(likes + 1);
            setLikeStatus(null);
            setReactionType(null);
            await deleteReactionFromServer('DISLIKE', article.id);
        } else {
            setLikes(likes - 1);
            setLikeStatus('DISLIKE');
            setReactionType('DISLIKE');
            await saveReactionToServer('DISLIKE', article.id);

            // Remove like status if present
            if (likeStatus === 'LIKE') {
                await deleteReactionFromServer('LIKE', article.id);
            }
        }
        updateArticleReactions('DISLIKE');
    };

    const saveCommentToServer = async (comment) => {
        try {
            const response = await axios.put(`${apiEndpoint}/posts/${comment.postId}/comments`, {
                content: comment.text,  // Inclure la propriété "content"
                userId: comment.userId, // Utiliser "comment.userId" au lieu de "userId"
            });

            console.log('Commentaire enregistré avec succès', response.data);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement du commentaire', error);
            throw error; // Vous pouvez gérer l'erreur de manière appropriée ici
        }
    };
    


    const handleCommentSubmit = async () => {
        if (commentText.trim() !== '') {
            const newComment = {
                postId: article.id,
                userId: userId,
                text: commentText.trim(),
                content : commentText.trim(),
            };

            try {
                await saveCommentToServer(newComment);
                setCommentText('');
                fetchComments(article.id); // Rafraîchir les commentaires après avoir ajouté un commentaire
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement du commentaire', error);
            }
        }
    };

    const saveReactionToServer = async (reactionType, postId) => {
        try {
            await axios.post(`${apiEndpoint}/posts/${postId}/reactions`, {
                type: reactionType,
                userId: userId,
            });
            console.log('Réaction enregistrée avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de la réaction', error);
        }
    };


    const deleteReactionFromServer = async (reactionType, postId) => {
        try {
            await axios.delete(`${apiEndpoint}/posts/${postId}/reactions`, {
                data: {
                    userId: userId,
                    type: reactionType,
                },
            });
            console.log('Réaction supprimée avec succès');
        } catch (error) {
            console.error('Erreur lors de la suppression de la réaction', error);
        }
    };

    const userLiked = articleReactions[title] && articleReactions[title]['LIKE'];
    const userDisliked = articleReactions[title] && articleReactions[title]['DISLIKE'];

    return (
        <Card className="mb-4">
              
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <div className="col-md-4 mb-4">
                    <img src={imgSrc} alt="" className="img-fluid" />
                </div>

                <Button variant="outline-primary" id={`like${title}`} onClick={handleLikeClick}>
                    {likeStatus === 'LIKE' ? (
                        <span>
                            <FaThumbsDown fill="#FF1493" /> Je n'aime pas {likes}
                        </span>
                    ) : (
                        <span>
                            <FaThumbsUp fill={userLiked ? '#FF1493' : '#FF1493'} /> {userLiked ? 'Vous aimez' : 'J\'aime'} {likes}
                        </span>
                    )}
                </Button>



                <Button variant="outline-secondary" data-bs-toggle="collapse" data-bs-target={`#commentCollapse${title}`}>
                    <FaComment /> Commenter
                </Button>
                <Collapse in={true} id={`commentCollapse${title}`}>

                    <InputGroup className="mt-3 mb-2">
                        <FormControl placeholder="Votre commentaire" value={commentText} onChange={handleCommentChange} />
                        <Button variant="primary" id={`submitComment${title}`} onClick={handleCommentSubmit}>Soumettre</Button>
                    </InputGroup>

                </Collapse>

                <div>
                        {comments.length > 0 && (
                            <div className="mt-3">
                                <h5 className="mb-4 text-sm mx-auto"> Commentaires :</h5>
                                <ul className="mb-4 text-sm mx-auto"> 
                                    {comments.map((comment, index) => ( 
                                        <li key={index}>{comment.text} {comment.content} </li>
                                    ))}
                                </ul>
                                <hr />
                            </div>
                        )}
                    </div>

               

            </Card.Body>
        </Card>
    );
}

export default ArticleCard;
