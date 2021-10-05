import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Course.css';
const Course = (props) => {
    const { price, course_name, course_details, picture } = props.course;

    let history =  useHistory();

    const takeCourse = () => {
      history.push('/contact');
    }

    return (
      <Col xs={12} md={3}>
        <Card className="single-course mb-3">
          <Card.Img variant="top" src={picture} />
          <div className="price">$ {price}</div>
          <Card.Body>
            <Card.Title>{course_name}</Card.Title>
            <Card.Text>{course_details}</Card.Text>
            <hr />
            <div className="text-center">
              <div className="btn-v3" onClick={takeCourse}>Take this Course</div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Course;