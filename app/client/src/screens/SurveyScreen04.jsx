import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import Question from '../components/Question';
import { submitPSS } from '../actions/survey.actions';
import questions from '../data/questions03.json';
// import { surveyFinalSubmit } from '../actions/survey.actions';

const SurveyScreen04 = ({ history }) => {
  const numStart = 1;
  const numQuestions = 10;
  const initialResponses = useSelector((state) => state.surveyResponses);
  const [responses, setResponses] = useState(initialResponses);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo } = userLogin;
  const surveySubmit = useSelector((state) => state.surveySubmit);
  const { loading: loadingSubmit, error: errorSubmit } = surveySubmit;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo, history]);

  const submitHandler = (event) => {
    event.preventDefault();
    setError('');
    for (let i = 1; i < numStart + numQuestions; i++) {
      let key = `${i}`;
      // if (key.length < 2) key = '0' + key;
      if (responses[key] === undefined) {
        // if (i < numStart) history.push('/survey/01');
        setError(`Please select a response for question number ${key}`);
        return;
      }
    }
    console.log(responses);
    dispatch(submitPSS(responses));
    setResponses(initialResponses);
    history.push('/survey/03');
  };

  return (
    <Container>
      <Link to='/reaction' className='btn btn-light my-3'>
        Back
      </Link>
      <FormContainer>
        <h1>PSS</h1>
        <h6>In the last month, how often have you</h6>
        {(error || errorSubmit) && (
          <Message variant='danger'>{error || errorSubmit}</Message>
        )}

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
              {loadingSubmit ? (
                <Spinner animation='border' size='sm' />
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default SurveyScreen04;
