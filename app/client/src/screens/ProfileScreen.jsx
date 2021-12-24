import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProfileScreen = () => {
  return (
    <Jumbotron>
      <h1>You're successfully registered!</h1>
      <p>Before proceeding to the questionnaire, please take a quick test <strong><a href="https://faculty.washington.edu/chudler/java/timestc.html" target="_blank">here</a></strong> and submit the score.</p>
      <p>
        <LinkContainer to='/survey/01'>
          <Button variant='primary'>Submit</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};

export default ProfileScreen;
