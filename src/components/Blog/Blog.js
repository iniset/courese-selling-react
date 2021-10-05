import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Post from '../Post/Post';
import Subheader from '../Subheader/Subheader';
const Blog = () => {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);



    return (
      <div>
        <Subheader subtitle="Blog List" key={4}></Subheader>

        <Container>
          <Row className="g-4 mtb-80">
            <Col xs={12} md={12}>
              <h2>Lingvico Skill Development Blogs</h2>
              <p>Take courses from the world's best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a small fee.</p>
            </Col>
            {
              posts.map( data => <Post posts={data} key={data.id}></Post>)
            }
          </Row>
        </Container>
      </div>
    );
};

export default Blog;