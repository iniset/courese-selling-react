import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Calltoaction.css';

const Calltoaction = () => {
    return (
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-search"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Find your course
                  </Card.Title>
                  <Card.Text>
                    Could your ideal course be in Australia, Canada, New
                    Zealand, the UK or the US?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-comment-dots"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Explore your options
                  </Card.Title>
                  <Card.Text>
                    We are truly global. We offer you more choices and more
                    support.See where you could study.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="call-to-action text-center">
                <i className="fas fa-globe"></i>
                <Card.Body>
                  <Card.Title className="text-center">
                    Preparing to go?
                  </Card.Title>
                  <Card.Text>
                    It’s time to get ready for your life-changing international
                    education experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Calltoaction;