import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Subheader.css';

const Subheader = (props) => {
    return (
      <div>
        <div className="sub-banner mb-5 d-flex align-items-center">
          <Container>
            <Row>
              <Col>
                <h2>{props.subtitle}</h2>
                <h5>Get more out of your career & Become the best</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Subheader;