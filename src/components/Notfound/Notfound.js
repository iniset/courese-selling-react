import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Subheader from '../Subheader/Subheader';

const Notfound = () => {

  const history = useHistory();

  const BackToHome = ()=>{
      history.push('/home');
  }

    return (
      <div>
      <Subheader subtitle="Oops! 404 Not Found" key={3}></Subheader>

        <Container>
          <Row className="g-4 mt-5">
            <Col xs={12} md={12}>
              <Card className="about-content  mt-5">
                <Card.Body className="text-center">
                  <Card.Title>
                  <h2 className="text-bold">Oops!</h2>
                <h2>404 Not Found</h2>
                <p>Sorry, an error has occured, Requested page not found!</p>
                  </Card.Title>
                  <button className="btn-v2 ms-2" onClick={BackToHome}>
                  Back to home
                </button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        </div>
      
    );
};

export default Notfound;