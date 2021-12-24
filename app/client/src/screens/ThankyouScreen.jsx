import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/user.actions';

const ThankyouScreen = ({ history }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <Jumbotron>
      <h1>Thank you for filling up the questionnaire.</h1>
      <p>You may log out for now, we'll contact you shortly.</p>
      <p>
          <Button variant='primary' onClick={logoutHandler}>Log Out</Button>
      </p>
    </Jumbotron>
  );
};

export default ThankyouScreen;
