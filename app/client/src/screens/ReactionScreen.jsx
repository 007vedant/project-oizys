import React from 'react';
import { Jumbotron, Button, Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { LinkContainer } from 'react-router-bootstrap';

const ReactionScreen = () => {
  return (
    <Jumbotron>
      <h1>Welcome back!</h1>
      <p>Please take the following tests and submit your scores. <strong><a href="https://www.psytoolkit.org/experiment-library/experiment_stroop.html" target="_blank" rel="noreferrer">Stroop Test</a></strong> and <strong><a href="https://www.arealme.com/reaction-test/en/" target="_blank" rel="noreferrer"> Reaction Time Test</a></strong>.</p>
      <p>
      <FormContainer>
      <Form>
        <Form.Group controlId='strp'>
          {/* <Form.Label>Email Address</Form.Label> */}
          <Form.Control
            type='strp'
            placeholder='Enter Stroop Test Score'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='brt'>
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type='brt'
            placeholder='Enter Reaction-Time Test Score'
          ></Form.Control>
        </Form.Group>
      </Form>
      </FormContainer>
        <LinkContainer to='/survey/04'>
          <Button variant='primary'>Submit</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};

export default ReactionScreen;
