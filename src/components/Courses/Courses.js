import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Course from '../Course/Course';
import Subheader from '../Subheader/Subheader';
import './Courses.css';
const Courses = () => {


  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);


    return (
      <div>
        <Subheader subtitle="Course List" key={1}></Subheader>
        
        <Container>
          <Row className="g-4 mtb-80">
          <Col xs={12} md={12}>
                <h2>What Coursera Has to Offer</h2>
                <p>
                Learn a job-relevant skill that you can use today in under 2 hours through an interactive experience guided by a subject matter expert. Access everything you need right in your browser and complete your project confidently with step-by-step instructions. 
                </p>
          </Col>
            {courses.map((item) => (
              <Course key={item.id} course={item}></Course>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Courses;