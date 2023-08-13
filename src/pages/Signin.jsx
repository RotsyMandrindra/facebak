import React from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';
import { Link } from 'react-router-dom';

export default function SigninPage() {
  const styleObjet = {
    marginRight: '50px',
  };
  return (
    <div style={styleObjet}>
      <div className="main-content  mt-0">
        <div>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-primary text-gradient text-center"> Welcome </h3>
                    </div>
                    <div className="card-body ">
                      <form role="form" id="loginForm" action="/login" method="post">
                        <label>Email</label>
                        <div className="mb-3">
                          <input type="email" className="form-control" placeholder="Email" name="email" required />
                        </div>
                        <label>Password</label>
                        <div className="mb-3">
                          <input type="password" className="form-control" placeholder="Password" name="password" required />
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn bg-gradient-primary w-50 mt-4 mb-0"> Login </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a href="index.html" className="text-primary text-gradient font-weight-bold"> Sign Up </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6">
                      <div className="bg-image" style={{ backgroundImage: "url('./img/curved-images/curved21.jpg')" }}></div>
                      <div className="bg-blur"></div>
                    </div>
                  </div>
                  <div className="facebak">
                    <Link to="/profil">
                      <h1>
                        facebak
                      </h1>
                    </Link>
                    <p className="connect">
                      Connect with friends and the world around you on Facebak.
                    </p>
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
