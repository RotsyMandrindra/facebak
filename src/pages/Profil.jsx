import React, { useState, useEffect } from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';

export default function ProfilPage() {
  const [username, setUsername] = useState('John Doe');
  const [bio, setBio] = useState('Web Developer | Travel Enthusiast');
  const [photos, setPhotos] = useState([
    './img/team-1.jpg',
    './img/team-2.jpg',
    './img/team-3.jpg'
  ]);

  useEffect(() => {
    // Ici, vous pouvez ajouter la logique pour charger les données du profil depuis une source externe
    // par exemple, une API ou une base de données
  }, []);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour mettre à jour les informations du profil
  };

  return (
    <div>
      <div className="descend2">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="profile-header">
                        <img src="./img/team-4.jpg" alt="Profile Avatar" className="profile-avatar" />
                        <div className="profile-name">{username}</div>
                        <div className="profile-bio">{bio}</div>
                      </div>
                      <div className="profile-stats">
                        <div className="profile-stat">Followers: 10K</div>
                        <div className="profile-stat">Following: 200</div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="profile-content">
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in lectus eu elit faucibus
                          fringilla eu in dui.</p>

                        <form onSubmit={handleEditSubmit} id="editUserForm">
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control" id="bio" name="bio" rows="3" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary" id="submitEditUser">Submit</button>
                        </form>

                        <h2>Photos</h2>
                        <div className="row">
                          {photos.map((photo, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                              <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
