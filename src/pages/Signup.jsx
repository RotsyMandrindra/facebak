
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import axios from 'axios';
import { Post } from '../ApiConfig';
import '../styles/profil.css';
import '../styles/gros.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
      confirmPassword,
      username
    }

    try {
      const response = Post('/users', data);
      console.log('Registration successful');
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
                  <SignupForm
                    registrationMessage={registrationMessage}
                    handleSubmit={handleSubmit}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                  />
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