import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { submitReaction } from '../actions/reaction.action';

const ReactionScreen = () => {
  const [strp, setStrp] = useState(0);
  const [brt, setBrt] = useState(0);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(submitReaction(strp, brt));
    history.push('/survey/04');
  };

  return (
    <Jumbotron>
      <h1>Welcome back!</h1>
      <p>
        Please take the following reaction time tests and submit your scores.{' '}
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
      </p>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='strp'>
          <Form.Label>Stroop Test Score</Form.Label>
          <Form.Control
            type='number'
            value={strp}
            onChange={(e) => setStrp(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='brt' required>
          <Form.Label>Reaction Time Test Score</Form.Label>
          <Form.Control
            type='number'
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
