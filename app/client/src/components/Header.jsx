import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { logout } from '../actions/user.actions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <header>
      <Navbar
        bg='primary'
        variant='dark'
        collapseOnSelect
        expand='lg'
        className='p-2'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <h3 className='icon'>ResearchQ</h3>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {/* <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  {'  '}Cart
                </Nav.Link>
              </LinkContainer> */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/reaction'>
                    <NavDropdown.Item>Reaction Time Tests</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/survey/04'>
                    <NavDropdown.Item>PSS Questionnaire</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/survey/03'>
                    <NavDropdown.Item>Audio Upload</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/meditation'>
                    <NavDropdown.Item>Meditation</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>
                    {'  '}Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
