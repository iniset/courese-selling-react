import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from 'react-router';
import Calltoaction from '../Calltoaction/Calltoaction';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
  
  const [featureds, setFeatureds] = useState([]);
  useEffect(()=>{
    fetch("./data/featured.json")
      .then((response) => response.json())
      .then((data) => setFeatureds(data));
  },[]);


  let history = useHistory();
  const GoToAllCourses = () => {
    history.push('/courses');

  };


  const GoToContactUs = () => {
    history.push('/contact');
  }

    return (
      <div>
        <div className="banner mb-5 d-flex align-items-center">
          <Container>
            <Row>
              <Col>
                <h2>Study global</h2>
                <h5 className="mb-3">
                  Get more out of your career & Become the best version of
                  yourself...
                </h5>

                <button className="btn-v1" onClick={GoToContactUs}>Contact Us</button>
                <button className="btn-v2 ms-2" onClick={GoToContactUs}>Free Registration</button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Load Call to Action  */}
        <Calltoaction></Calltoaction>

        {/* Load Featured Courses */}
        <Container className="mb-5">
          <Row className="g-4 mt-5 mb-5">
            <Col xs={12} md={12} className="text-center">
              <h2>SPECIALIZATION (4 COURSES)</h2>
              <p>This three-course specialization teaches students how to build a diverse, sustainable fundraising pipeline. The topics covered include writing proposals, identifying potential donors, building relationships with donors and digital crowdfunding.</p>
            </Col>

            {featureds.map((item) => (
              <Course key={item.id} course={item}></Course>
            ))}

            <Col xs={12} md={12} className="text-center mt-5 mb-5">
              <button className="btn-v2 ms-2" onClick={GoToAllCourses}>
                View All Courses
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Home;