import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
      <div>
        <footer className="footer-area text-center">
          <Container>
            <Row>
              <Col xs={12} md={12}>
                Copyright &copy; 2021 by{" "}
                <a
                  href="https://github.com/iniset"
                >
                  iniset
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
};

export default Footer;