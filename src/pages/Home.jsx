
import React from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';

export default function HomePage() {
    return <div>

        <div class="descend2">
            <div class="container-fluid py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                           
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">Article 1</h5>
                                    <p class="card-text">Contenu de l'article.</p>
                                    <div class="col-md-4 mb-4">
                                        <img src="./img/team-1.jpg" alt="Photo 1" class="img-fluid"/>
                                    </div>
                                    <button class="btn btn-outline-primary" id="likeArticle1">
                                        <i class="fas fa-thumbs-up"></i> J'aime
                                    </button>
                                    <button class="btn btn-outline-secondary" data-bs-toggle="collapse"
                                        data-bs-target="#commentCollapse1">
                                        <i class="fas fa-comment"></i> Commenter
                                    </button>
                                    <div class="collapse mt-3" id="commentCollapse1">
                                        <input type="text" class="form-control mb-2" placeholder="Votre commentaire" id="commentInput1"/>
                                            <button class="btn btn-primary" id="submitComment1">Soumettre</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">Article 1</h5>
                                    <p class="card-text">Contenu de l'article.</p>
                                    <div class="col-md-4 mb-4">
                                        <img src="./img/team-1.jpg" alt="Photo 1" class="img-fluid"/>
                                    </div>
                                    <button class="btn btn-outline-primary" id="likeArticle1">
                                        <i class="fas fa-thumbs-up"></i> J'aime
                                    </button>
                                    <button class="btn btn-outline-secondary" data-bs-toggle="collapse"
                                        data-bs-target="#commentCollapse1">
                                        <i class="fas fa-comment"></i> Commenter
                                    </button>
                                    <div class="collapse mt-3" id="commentCollapse1">
                                        <input type="text" class="form-control mb-2" placeholder="Votre commentaire" id="commentInput1"/>
                                            <button class="btn btn-primary" id="submitComment1">Soumettre</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    </div>
}

