import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Developer &copy; <a href="https://github.com/007vedant">Vedant Raghuwanshi</a></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
