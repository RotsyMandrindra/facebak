import '../styles/profil.css';
import '../styles/gros.css';
import React, { useState } from 'react';
import { Card, Button, Collapse, InputGroup, FormControl } from 'react-bootstrap';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

function ArticleCard({ title, content, imgSrc }) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]); // État pour les commentaires

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleCommentSubmit = () => {
        const commentInput = document.getElementById(`commentInput${title}`);
        if (commentInput.value.trim() !== '') {
            setComments([...comments, commentInput.value.trim()]); // Ajouter le commentaire
            commentInput.value = ''; // Réinitialiser l'input
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
                    <FaThumbsUp /> J'aime {likes}
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
    const articles = [
        {
            title: 'Article 1',
            content: 'Contenu de l\'article 1.',
            imgSrc: './img/team-1.jpg',
        },
        {
            title: 'Article 2',
            content: 'Contenu de l\'article 2.',
            imgSrc: './img/team-2.jpg',
        },
        // Ajoutez d'autres articles ici si nécessaire
    ];

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
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
