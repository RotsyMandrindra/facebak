import React, { useState, useEffect } from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';


export default function ProfilPage() {
  const [username, setUsername] = useState(' You Name ');
  const [bio, setBio] = useState(' Your bio ');
  const [photos, setPhotos] = useState([
    './img/team-1.jpg',
    './img/team-2.jpg',
    './img/team-3.jpg'
  ]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [updatedBio, setUpdatedBio] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateFailed, setUpdateFailed] = useState(false);
  const [formReset, setFormReset] = useState(false);
  

  useEffect(() => {
    let timer;
    
    if (updateSuccess || updateFailed) {
      timer = setTimeout(() => {
        setUpdateSuccess(false);
        setUpdateFailed(false);
      }, 10000); // 3000 millisecondes (3 secondes)
    }

    return () => clearTimeout(timer);
  }, [updateSuccess, updateFailed]);


  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const updatedProfileData = {
      username: updatedUsername || username,
      bio: updatedBio || bio,
      email,
      password,
      newPassword,
      confirmNewPassword,
    };

    try {
      console.log('eeehh', updatedProfileData)
      const response = await axios.put(`${apiEndpoint}/users`, updatedProfileData);
      console.log('notre réponse', response);
      console.log('data success', response.data.success);

      if (response.status === 200) {
        console.log('Profile updated successfully');
        setUpdateSuccess(true);
        setUpdateFailed(false);
        setUsername(updatedUsername || username);
        setBio(updatedBio || bio);
        setEmail(''); // Réinitialiser l'email
        setPassword(''); // Réinitialiser le mot de passe
        setNewPassword(''); // Réinitialiser le nouveau mot de passe
        setConfirmNewPassword('');
        setFormReset(true);

      } else {
        console.error('Profile update failed');
        setUpdateSuccess(false);
        setUpdateFailed(true);
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setUpdateSuccess(false);
      setUpdateFailed(true);
    }
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
                        <div className="profile-name">
                          {username}
                        </div>
                        <div className="profile-bio">
                          {bio}
                        </div>
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

                        {updateSuccess && (
                          <div className="alert alert-success" role="alert">
                            Profile updated successfully !
                          </div>
                        )}

                        {updateFailed && (
                          <div className="alert alert-danger" role="alert">
                            Profile update failed !
                          </div>
                        )}

                        <form onSubmit={handleEditSubmit} id="editUserForm">

                          <div className="mb-3">
                            <label htmlFor="username"
                              className="form-label">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              value={(formReset ? '' : updatedUsername) || username}
                              onChange={(e) => setUpdatedUsername(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email"
                              className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                          </div>


                          <div className="mb-3">
                            <label htmlFor="bio"
                              className="form-label">Bio</label>
                            <textarea
                              className="form-control"
                              id="bio"
                              name="bio"
                              rows="3"
                              value={(formReset ? '' : updatedBio) || bio}
                              onChange={(e) => setUpdatedBio(e.target.value)}
                            ></textarea>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="password"
                              className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword" name="newPassword"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)} />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                            <input type="password" className="form-control" id="confirmNewPassword" name="confirmNewPassword"
                              value={confirmNewPassword}
                              onChange={(e) => setConfirmNewPassword(e.target.value)} />
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
