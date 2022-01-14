import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import { submitReaction } from '../actions/reaction.action';

// let submitCtr = 0;

const ReactionScreen = ({ history }) => {
  const [strp, setStrp] = useState(0);
  const [brt, setBrt] = useState(0);
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();



  const submitHandler = (e) => {
    e.preventDefault();
    setCounter(counter+1);
    dispatch(submitReaction(strp, brt));
    setStrp(0);
    setBrt(0);
    if(counter >= 4) {
      history.push('/survey/04');
    }
  };

  return (
    <Jumbotron>
      <h1>Welcome back!</h1>
      <p>
        Please take the following reaction time tests <strong>5 times</strong> and submit your scores after every attempt. Thereafter proceed to the next section.{' '}
        <strong>
          <a
            href='https://www.psytoolkit.org/experiment-library/experiment_stroop.html'
            target='_blank'
            rel='noreferrer'
          >
            Stroop Test
          </a>
        </strong>{' '}
        and{' '}
        <strong>
          <a
            href='https://www.arealme.com/reaction-test/en/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Reaction Time Test
          </a>
        </strong>
        .
        <br></br>
        <p> Number of Submits Left: {5 - counter}</p>
      </p>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='strp'>
          <Form.Label>Stroop Test Score</Form.Label>
          <Form.Control
            type='text'
            value={strp}
            onChange={(e) => setStrp(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='brt' required>
          <Form.Label>Reaction Time Test Score</Form.Label>
          <Form.Control
            type='text'
            value={brt}
            onChange={(e) => setBrt(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default ReactionScreen;