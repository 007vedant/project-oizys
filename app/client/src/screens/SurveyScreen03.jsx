import axios from 'axios';
import BASE_URL from '../config';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const AddRecordScreen = ({ history, match }) => {
  const [file, setFile] = useState('');

  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const files = new FormData();
    files.append('file', file);
    setUploading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: userInfo.token,
        },
      };

      const { data } = await axios.post(
        BASE_URL + '/api/upload',
        files,
        config
      );

      setFile(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Upload the Audio file!');
    history.push('/');
    // if (userInfo && userInfo.userType === 'patient') {
    //   dispatch(
    //     createRecord({
    //       name,
    //       doctor,
    //       file,
    //       category,
    //       description,
    //     })
    //   );
    // } else if (userInfo && patientId) {
    //   dispatch(
    //     createPatientRecord(patientId, {
    //       name,
    //       doctor,
    //       file,
    //       category,
    //       description,
    //     })
    //   );
    // }
  };

  return (
    <Container>
      <Link to={`/survey/02`} className='btn btn-light my-3'>
        Back
      </Link>
      <FormContainer>
        <h1>Step 03</h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <h3>Please upload a recording of following text: </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ad optio vitae dolorum, fuga eum quaerat voluptatem! Deserunt
              illum ab aut adipisci impedit sequi provident, at aliquam quaerat
              ullam unde?
            </p>

            <Form.Group controlId='image'>
              <Form.Label>Upload File</Form.Label>
              <Row>
                <Col className='p-0'>
                  <Form.Control
                    type='text'
                    placeholder='Enter File URL'
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    disabled
                  ></Form.Control>
                </Col>
                <Col className='d-flex align-items-center'>
                  <Form.File
                    id='image-file'
                    onChange={uploadFileHandler}
                  ></Form.File>
                </Col>
              </Row>

              {uploading && <Loader />}
            </Form.Group>

            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default AddRecordScreen;
