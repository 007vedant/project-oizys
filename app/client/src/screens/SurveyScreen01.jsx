import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import Question from '../components/Question';
import { surveyFirstSubmit } from '../actions/survey.actions';
import questions from '../data/questions01.json';

const SurveyScreen01 = ({ history, match }) => {
  const numQuestions = 8;
  const initialResponses = {};
  const [responses, setResponses] = useState(initialResponses);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo, history]);

  const submitHandler = (event) => {
    event.preventDefault();
    for (let i = 1; i <= numQuestions; i++) {
      let key = `${i}`;
      if (key.length < 2) key = '0' + key;
      if (responses[key] === undefined) {
        setError(`Please select a response for question number ${key}`);
        return;
      }
    }
    dispatch(surveyFirstSubmit(responses));
    setResponses({});
    history.push('/survey/02');
  };

  return (
    <Container>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Generalized Anxiety Disorder Screener</h1>
        <h6>Over the last 2 weeks, how often have you been bothered by the following problems?</h6>
        {error && <Message variant='danger'>{error}</Message>}

        {loading ? (
          <Loader />
        ) : (
          <Form onSubmit={submitHandler}>
            {questions.map(({ qno, question, options }) => (
              <Question
                key={qno}
                qno={qno}
                question={question}
                options={options}
                responses={responses}
                setResponses={setResponses}
              />
            ))}

            <Button type='submit' variant='primary'>
              Next
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default SurveyScreen01;
