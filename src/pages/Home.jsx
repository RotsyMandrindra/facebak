import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';
import { Put, Get, Post } from '../ApiConfig';

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
        const fetchData = async () => {
            try {
                const userResponse = await Get('/users');
                const articleResponse = await Get('/posts');

                // console.log("Userrsponse", userResponse);

                setUser(userResponse); // Utilisez userResponse.data pour accéder aux données des utilisateurs
                setArticles(articleResponse); // Utilisez articleResponse.data pour accéder aux données des articles

                setSelectedUser(userResponse[0]);
            } catch (error) {
                console.error('Erreur lors de la récupération des informations', error);
            }
        };

        fetchData();

        if (selectedUser) {
            const fetchUserById = async (userId) => {
                try {
                    console.log("fetchUserById voila", userByIdResponse);
                    const userByIdResponse = Get(`/users/${userId}`);

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
    
        const data = {
            title: newPostTitle,
            content: newPostContent,
            userId: selectedUser ? selectedUser.id : null,
        };
    
        try {
            console.log('Données du nouveau post', data);
            const response = await Put('/posts', data);  // Utilisation d'async/await
    
            console.log('Réponse du serveur', response);
    
            if (response && response.title && response.content) {
                setArticles([...articles, response]);  // Utilisation de response directement
                setNewPostTitle('');
                setNewPostContent('');
            } else {
                console.error('La réponse ne contient pas la structure attendue.');
            }
        } catch (error) {
            console.error('Erreur lors de la création du nouveau post', error);
        }
    };
    






    if (!user || articles === 0) {
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
