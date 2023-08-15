
import axios from 'axios';
import { apiEndpoint } from '../ApiConfig';
import '../styles/profil.css';
import '../styles/gros.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(null); // Nouvel état

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
      confirmPassword,
      username
    }

    try {
      const response = await axios.post(`${apiEndpoint}/users`, data);
      console.log('Registration successful', response.data);
      setRegistrationMessage('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Registration failed', error);
      setRegistrationMessage('Registration failed');
    }

  };

  const styleObjet = {
    marginRight: '50px',
  };

  return (
    <div style={styleObjet}>
      <div className="main-content">
        <div className="page-header min-vh-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <Card className="mt-8">
                  <Card.Header className="pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-primary text-gradient text-center"> Welcome </h3>
                  </Card.Header>
                  <Card.Body>
                    <form role="form" onSubmit={handleSubmit} className="text-center">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <InputGroup className="mb-3">
                            <FormControl type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} required />
                          </InputGroup>
                        </div>
                        <div className="col-md-6 mb-3">
                          <InputGroup className="mb-3">
                            <FormControl type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                          </InputGroup>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <InputGroup className="mb-3">
                            <FormControl type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                          </InputGroup>
                        </div>
                        <div className="col-md-6 mb-3">
                          <InputGroup className="mb-3">
                            <FormControl type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                          </InputGroup>
                        </div>
                      </div>
                      <div className="text-center">
                        <Button type="submit" id="submitSignUp" className="btn bg-gradient-primary w-50 mt-4 mb-0">
                          Sign Up
                        </Button>
                        {registrationMessage && (
                          <p className={registrationMessage.includes('successful') ? 'text-success' : 'text-danger'}>
                            {registrationMessage}
                          </p>
                        )}
                      </div>
                    </form>
                  </Card.Body>
                  <Card.Footer className="text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Already have an account?
                      <Link to="/signin" className="text-primary text-gradient font-weight-bold"> Sign In </Link>
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
  );
}
export default SignupPage;

