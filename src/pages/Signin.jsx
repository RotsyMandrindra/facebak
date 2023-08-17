import React, { useState } from 'react';
import '../styles/soft.css';
import '../styles/profil.css';
import '../styles/gros.css';
import { Link, } from 'react-router-dom';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
     
    }

    try {
      console.log('ettooooo', data);
      const response = await axios.put(`${apiEndpoint}/users`, data);
      console.log("okkk", response);

      if (response.data.success) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError(response.data.error);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
    
  };

  const styleObjet = {
    marginRight: '50px',
  };

  return (
    <div style={styleObjet}>
      <div className="main-content mt-0">
      {isAuthenticated ? (
        <p>Welcome, you are logged in!</p>
      ) : (
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </InputGroup>

                        <label>Password</label>
                        <InputGroup className="mb-3">
                          <FormControl
                           
                            placeholder="Password"
                            type ="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </InputGroup>

                        <label>Username</label>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Username"
                            type ="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </InputGroup>
                        


                        <div className="text-center">
                          <Button type="submit" id="submitSignin" className="btn bg-gradient-primary w-50 mt-4 mb-0"> Login </Button>
                        </div>
                        {error && <p className="text-danger mt-2">{error}</p>}
                        {error === 'password_no_match' && <p className="text-danger mt-2">Password is incorrect</p>}
                        {error === 'email_no_match' && <p className="text-danger mt-2">Email is incorrect</p>}
                        {error === 'password_and_email_no_match' && <p className="text-danger mt-2">Both email and password are incorrect</p>}
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
      )}
      </div>
    </div>
  );
}
