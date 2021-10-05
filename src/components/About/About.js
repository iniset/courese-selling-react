import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Subheader from '../Subheader/Subheader';
import aboutImage from './images/about-us.jpg';
import './About.css';

const About = () => {
    return (
      <div>
        <Subheader subtitle="About Us" key={3}></Subheader>

        <Container>
          <Row className="g-4 mtb-80">
            <Col xs={12} md={12}>
              <h2>About Lingvico</h2>
              <p>We like to work in partnership with leading organizations on multiple fronts – be it in the realm of data democratization, skills development, entrepreneurial ecosystem and more and Our entrepreneurial journey started back in 2013 with a simple vision: to inspire businesses in Bangladesh to advance the economy. Between then and now, we have strived to create impact in 400+ organizations across 40+ industries. </p>
              <p>Take courses from the world's best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a small fee.</p>
            </Col>
            <Col xs={12} md={7}>
              <Card className="about-content">
                <Card.Body>
                  <Card.Title className="">
                  <h2>Take your skills to the next level</h2>
                  </Card.Title>
                  <Card.Text>
                  <p>Lingvico is an Education platform and Product Development company based in New Delhi, India. Our team of IT experts create beautiful and exceptional functional websites for customers around the world.</p>
                  <p>We love the creative aspect of designing a great website. At the end of the day; however, our primary mission is to create online presence with a high ROI that meet the strategic objectives of our clients.</p>
                  <p>In order to accomplish the goal, we have assigned a dedicated relationship manager solely responsible for understanding the customer requirement and objective. The relationship manager works closely with the customer and is their primary point of contact throughout the entire process.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} md={5}>
              <Card className="text-center">
                <Card.Body>
                <img src={aboutImage} className="w-100" alt="about-us" />
                </Card.Body>
              </Card>
            </Col>


            <Col xs={12} md={12}>
              <h2>Key Partners</h2>
              <p>We believe the Bangladesh opportunity is exciting – led by your goals and accomplishments. And to that end, we are here to support and collaborate. We like to work in partnership with leading organizations on multiple fronts – be it in the realm of data democratization, skills development, entrepreneurial ecosystem and more and Our entrepreneurial journey started back in 2013 with a simple vision: to inspire businesses in Bangladesh to advance the economy. Between then and now, we have strived to create impact in 400+ organizations across 40+ industries. </p>
            </Col>

          </Row>
        </Container>



      </div>
    );
};

export default About;