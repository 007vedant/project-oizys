import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import SurveyScreen01 from './screens/SurveyScreen01';
import SurveyScreen02 from './screens/SurveyScreen02';
import SurveyScreen03 from './screens/SurveyScreen03';
import ThankyouScreen from './screens/ThankyouScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
          <Route path='/survey/01' exact component={SurveyScreen01} />
          <Route path='/survey/02' exact component={SurveyScreen02} />
          <Route path='/thankyou' exact component={ThankyouScreen} />
          <Route path='/survey/03' exact component={SurveyScreen03} />
          <Route path='/' exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
