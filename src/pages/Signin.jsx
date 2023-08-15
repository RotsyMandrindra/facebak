import React, { useState } from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';
import { Link } from 'react-router-dom';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Ajoutez la logique pour gérer la soumission du formulaire de connexion
    // Par exemple, vous pouvez appeler une API pour vérifier les informations d'identification
  };

  const styleObjet = {
    marginRight: '50px',
  };

  return (
    <div style={styleObjet}>
      <div className="main-content mt-0">
        <div>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">

                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <Card className="mt-8">
                    <Card.Header className="pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-primary text-gradient text-center"> Welcome </h3>
                    </Card.Header>
                    <Card.Body>
                      <form role="form" id="loginForm" onSubmit={handleFormSubmit}>
                        <label>Email</label>
                        <InputGroup className="mb-3">
                          <FormControl
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </InputGroup>
                        <label>Password</label>
                        <InputGroup className="mb-3">
                          <FormControl
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </InputGroup>

                        <div className="text-center">
                          <Button type="submit" className="btn bg-gradient-primary w-50 mt-4 mb-0"> Login </Button>
                        </div>
                      </form>
                    </Card.Body>
                    <Card.Footer className="text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <Link to="/" className="text-primary text-gradient font-weight-bold"> Sign Up </Link>
                      </p>
                    </Card.Footer>
                  </Card>
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
