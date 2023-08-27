import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';
import ArticleCard from './ArticleCard';
import { Form, Button } from 'react-bootstrap';

function HomePage() {
    const [user, setUser] = useState(null);
    
    const [articles, setArticles] = useState([]);
    const [articleReactions, setArticleReactions] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}/users`);
                setUser(response.data);
                setSelectedUser(response.data[0]);
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur', error);
            }
        };


        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}/posts`);
                setArticles(response.data);
                console.log("setArticle", response.data);

            } catch (error) {
                console.error('Erreur lors de la récupération des articles', error);
            }
        };

        fetchUser();
        fetchArticles();

        // Récupérer les informations de l'utilisateur par son ID
        if (selectedUser) {
            const fetchUserById = async (userId) => {
                try {
                    const userByIdResponse = await axios.get(`${apiEndpoint}/users/${userId}`);

                    console.log("fetchUserById voila", userByIdResponse);
                } catch (error) {
                    console.error('Erreur lors de la récupération des informations de l\'utilisateur par ID', error);
                }
            };

            fetchUserById(selectedUser.id);
        }
    }, []);

    const updateArticleReactions = (title, reactionType) => {
        const updatedReactions = { ...articleReactions };
        if (!updatedReactions[title]) {
            updatedReactions[title] = {};
        }
        updatedReactions[title][reactionType] = true;
        setArticleReactions(updatedReactions);
    };


    const handleNewPostSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`${apiEndpoint}/posts`, {
                title: newPostTitle,
                content: newPostContent,
                imgSrc: newPostImage,
                userId: selectedUser ? selectedUser.id : null,
                // userId: selectedUser.id, // Assurez-vous de gérer l'ID de l'utilisateur
            });

            // Mettre à jour la liste des articles avec le nouveau post
            setArticles([...articles, response.data]);

            // Réinitialiser les champs du formulaire
            setNewPostTitle('');
            setNewPostContent('');
            setNewPostImage('');
        } catch (error) {
            console.error('Erreur lors de la création du nouveau post', error);
        }
    };



    if ( !user || articles.length === 0) {
        return <div>Chargement...</div>;
    }


    return (
        <div className="descend2">
            <div className="container-fluid py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                        <img src="./img/team-1.jpg" alt="" className="profile-avatar2" />
                            <h2>
                                Quoi de neuf ?
                            </h2>
                            {/* Formulaire de création d'un nouveau post */}
                            <Form onSubmit={handleNewPostSubmit}>
                                <Form.Group className="mt-3 mb-2" controlId="newPostTitle">
                                    <Form.Control
                                        type="text"
                                        placeholder="Titre du post"
                                        value={newPostTitle}
                                        onChange={(e) => setNewPostTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mt-3 mb-2" controlId="newPostContent">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Contenu du post"
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                    />
                                </Form.Group>
                               
                                <Button variant="primary" type="submit">
                                    Créer post
                                </Button>
                            </Form>
                            {articles.map((article) => (
                                <ArticleCard
                                    key={article.title}
                                    title={article.title}
                                    content={article.content}
                                    imgSrc={article.imgSrc}
                                    userId={selectedUser ? selectedUser.id : null}
                                    article={article}
                                    articleReactions={articleReactions}
                                    updateArticleReactions={(title, reactionType) => updateArticleReactions(title, reactionType)}
                                    setArticleReactions={setArticleReactions}

                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
