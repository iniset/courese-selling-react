import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import Subheader from '../Subheader/Subheader';
import map from './images/map.png';
import './Contact.css';

const Contact = () => {
    return (
      <div>
        <Subheader subtitle="Contact Us" key={2}></Subheader>

        <Container>
          <Row className="g-4">
            <Col xs={12} md={12} className="text-center">
              <div>
                <h4>Contact Info</h4>
                <h2>Connect With Us</h2>
              </div>
            </Col>
            <Col xs={12} md={12}>
            <img src={map} className="max-w" alt="map" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="g-4 mt-5">
            <Col xs={12} md={4}>
              <Card className="text-center contact-action">
                <Card.Body>
                  <Card.Title className="text-center">
                    <i className="fas fa-blender-phone"></i>
                  </Card.Title>
                  <Card.Text>
                    Could your ideal course be in Australia, Canada, New
                    Zealand, the UK or the US?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="text-center contact-action">
                <Card.Body>
                  <Card.Title className="text-center">
                    <i className="fas fa-map-marker-alt"></i>
                  </Card.Title>
                  <Card.Text>
                    Could your ideal course be in Australia, Canada, New
                    Zealand, the UK or the US?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="text-center contact-action">
                <Card.Body>
                  <Card.Title className="text-center">
                    <i className="fas fa-comments"></i>
                  </Card.Title>
                  <Card.Text>
                    Could your ideal course be in Australia, Canada, New
                    Zealand, the UK or the US?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Contact;