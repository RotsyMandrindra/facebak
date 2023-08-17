import '../styles/profil.css';
import '../styles/gros.css';
import React, { useState, useEffect } from 'react';
import { Card, Button, Collapse, InputGroup, FormControl } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';

function ArticleCard({ title, content, imgSrc, userId }) {
    const [likes, setLikes] = useState(0);
    const [likeStatus, setLikeStatus] = useState(null);
    const [comments, setComments] = useState([]);
    const [reactionType, setReactionType] = useState(null);

    const handleLikeClick = async () => {
        if (reactionType === 'LIKE') {
            setLikes(likes - 1);
            setLikeStatus(null);
            setReactionType(null);
        } else {
            setLikes(likes + 1);
            setLikeStatus('LIKE');
            setReactionType('LIKE');
        }
        await saveReactionToServer(reactionType);
    };

    const handleDislikeClick = async () => {
        if (reactionType === 'DISLIKE') {
            setLikeStatus(null);
            setReactionType(null);
        } else {
            setLikeStatus('DISLIKE');
            setReactionType('DISLIKE'); // Ajout de cette ligne
        }
        await saveReactionToServer(reactionType); // Utilisez `reactionType` ici
    };


    const handleCommentSubmit = () => {
        const commentInput = document.getElementById(`commentInput${title}`);
        if (commentInput.value.trim() !== '') {
            setComments([...comments, commentInput.value.trim()]);
            commentInput.value = '';
        }
    };

    const saveReactionToServer = async (type) => {
        if (type) {

            console.log("le type est kkk", type);
            try {
                const response = await axios.delete(`${apiEndpoint}/posts/:pid/reactions`, {
                    type: type,
                    userId: userId,
                });
            console.log('oook', response);
                console.log('Réaction enregistrée avec succès', response.data);
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement de la réaction', error);
            }
        }
    };


    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <div className="col-md-4 mb-4">
                    <img src={imgSrc} alt="Photo" className="img-fluid" />
                </div>

                <Button variant="outline-primary" id={`like${title}`} onClick={handleLikeClick}>
                    {likeStatus === 'LIKE' ? (
                        <span>
                            <FaThumbsUp fill="blue" /> J'aime {likes}
                        </span>
                    ) : (
                        <span>
                            <FaThumbsUp /> J'aime {likes}
                        </span>
                    )}
                </Button>

                <Button variant="outline-danger" id={`dislike${title}`} onClick={handleDislikeClick}>
                    {likeStatus === 'DISLIKE' ? (
                        <span>
                            <FaThumbsDown fill="red" /> Je n'aime pas {likes}
                        </span>
                    ) : (
                        <span>
                            <FaThumbsDown /> Je n'aime pas {likes}
                        </span>
                    )}
                </Button>


                <Button variant="outline-secondary" data-bs-toggle="collapse" data-bs-target={`#commentCollapse${title}`}>
                    <FaComment /> Commenter
                </Button>
                <Collapse in={true} id={`commentCollapse${title}`}>
                    <InputGroup className="mt-3 mb-2">
                        <FormControl placeholder="Votre commentaire" id={`commentInput${title}`} />
                        <Button variant="primary" id={`submitComment${title}`} onClick={handleCommentSubmit}>Soumettre</Button>
                    </InputGroup>
                </Collapse>
                {comments.length > 0 && (
                    <div className="mt-3">
                        <h5 className="mb-4 text-sm mx-auto">Commentaires :</h5>
                        <ul className="mb-4 text-sm mx-auto" >
                            {comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        <hr />
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}




export default function HomePage() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Récupérer les informations de l'utilisateur depuis l'API
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}/users`); // Remplacez par l'URL appropriée
                setUser(response.data);
                console.log('heyyy', response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur', error);
            }
        };

        // Récupérer la liste des articles depuis l'API
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}/posts`); // Remplacez par l'URL appropriée
                setArticles(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles', error);
            }
        };

        // Appeler les fonctions de récupération des données
        fetchUser();
        fetchArticles();
    }, []);

    if (!users || !user || articles.length === 0) {
        return <div>Chargement...</div>;
    }

    let selectedUser = null; // Définissez selectedUser à l'extérieur de la condition

    if (users.length > 0 && user) {
        selectedUser = users[0]; // Assurez-vous de définir selectedUser à l'intérieur de cette condition
    }

    return (
        <div className="descend2">
            <div className="container-fluid py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            {articles.map((article) => (
                                <ArticleCard
                                    key={article.title}
                                    title={article.title}
                                    content={article.content}
                                    imgSrc={article.imgSrc}
                                    userId={selectedUser ? selectedUser.id : null}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
