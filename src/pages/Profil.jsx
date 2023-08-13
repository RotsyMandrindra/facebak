
import React from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';


export default function ProfilPage() {
  return <div>
    
    <div class="descend2">
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-12">
            <div class="card mb-4">
            
              <div class="container mt-5">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-header">
                      <img src="./img/team-4.jpg" alt="Profile Avatar" class="profile-avatar"/>
                      <div class="profile-name">John Doe</div>
                      <div class="profile-bio">Web Developer | Travel Enthusiast</div>
                    </div>
                    <div class="profile-stats">
                      <div class="profile-stat">Followers: 10K</div>
                      <div class="profile-stat">Following: 200</div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="profile-content">
                      <h2>About Me</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in lectus eu elit faucibus
                        fringilla eu in dui.</p>

                        <form id="editUserForm">
                          <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username" value="John Doe"/>
                          </div>
                          <div class="mb-3">
                            <label for="bio" class="form-label">Bio</label>
                            <textarea class="form-control" id="bio" name="bio" rows="3">Web Developer | Travel Enthusiast</textarea>
                          </div>
                          <button type="submit" class="btn btn-primary" id="submitEditUser">Submit</button>
                        </form>


                      <h2>Photos</h2>
                      <div class="row">
                        <div class="col-md-4 mb-4">
                          <img src="./img/team-1.jpg" alt="Photo 1" class="img-fluid"/>
                        </div>
                        <div class="col-md-4 mb-4">
                          <img src="./img/team-2.jpg" alt="Photo 2" class="img-fluid"/>
                        </div>
                        <div class="col-md-4 mb-4">
                          <img src="./img/team-3.jpg" alt="Photo 3" class="img-fluid"/>
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
  </div>
}

