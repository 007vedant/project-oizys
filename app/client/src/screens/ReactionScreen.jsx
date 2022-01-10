import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ReactionScreen = () => {
  return (
    <Jumbotron>
      <h1>Welcome back!</h1>
      <p>Please take the following reaction time tests and submit your scores. <strong><a href="https://www.psytoolkit.org/experiment-library/experiment_stroop.html" target="_blank" rel="noreferrer">Stroop Test</a></strong> and <strong><a href="https://www.arealme.com/reaction-test/en/" target="_blank" rel="noreferrer"> Reaction Time Test</a></strong>.</p>
      <p>
        <LinkContainer to='/survey/04'>
          <Button variant='primary'>Submit</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};

export default ReactionScreen;
