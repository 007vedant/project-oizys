import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  return (
    <Jumbotron>
      <h1>Hello!</h1>
      <p>Please contribute to our research by taking a quick questionnare and recording the audio. Thanks!</p>
      <p>
        <LinkContainer to='/register'>
          <Button variant='primary'>Join Now</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};

export default HomeScreen;
