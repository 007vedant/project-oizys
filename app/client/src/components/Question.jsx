import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Question = ({ qno, question, options, responses, setResponses }) => {
  const handleChange = (e) => {
    responses[qno] = e.target.value;
    setResponses({ ...responses });
  };

  return (
    <>
      <Row>
        <Col sm='1' className='px-0'>
          <strong>{qno}. </strong>
        </Col>
        <Col className='px-0'>
          <p>{question}</p>
        </Col>
      </Row>

      <Row>
        <Col sm='1'></Col>
        <Col key={`inline-radio`} className='mb-3'>
          <Form onChange={handleChange} onSubmit={(e) => e.preventDefault()}>
            <Row>
              {options.map((op) => (
                <Col sm='6' key={`question-${qno}-${op}`}>
                  <Form.Check
                    inline
                    checked={op === responses[qno]}
                    label={op}
                    name={`question-${qno}`}
                    value={op}
                    type='radio'
                    id={`question-${qno}-${op}`}
                    onChange={() => console.log()}
                  />
                </Col>
              ))}
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Question;
