import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function SignupForm({
  registrationMessage,
  handleSubmit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <form role="form" onSubmit={handleSubmit} className="text-center">
      <div className="row">
        <div className="col-md-6 mb-3">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
        </div>
        <div className="col-md-6 mb-3">
          <InputGroup className="mb-3">
            <FormControl
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <InputGroup className="mb-3">
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
        </div>
        <div className="col-md-6 mb-3">
          <InputGroup className="mb-3">
            <FormControl
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>
        </div>
      </div>
      <div className="text-center">
        <Button
          type="submit"
          id="submitSignUp"
          className="btn bg-gradient-primary w-50 mt-4 mb-0"
        >
          Sign Up
        </Button>
        {registrationMessage && (
          <p
            className={
              registrationMessage.includes('successful')
                ? 'text-success'
                : 'text-danger'
            }
          >
            {registrationMessage}
          </p>
        )}
      </div>
    </form>
  );
}

export default SignupForm;
