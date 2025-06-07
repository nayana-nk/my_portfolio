import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Experience from './Experience.tsx';
import TravelStories from './Travel.tsx';

const About = () => (
  <Container className="py-2">
    <Row>
    
      <Col md={12}  className='text-start'>
        <h2>About me.</h2>
        <p>
          Hi I am Nayana, a 25 year old Frontend developer and traveller.
        
        </p>
        <div>
         <p>  Front-End Developer with 3+ years of experience building responsive, high-performance web applications using React.js and modern JavaScript frameworks. Passionate about creating clean, intuitive user interfaces that boost engagement and business value. Strong in integrating APIs, optimizing performance, and contributing to scalable, production-grade appss</p>
         
        </div>
        <Experience/>
        
        <TravelStories/>
      </Col>
    </Row>
  </Container>
);

export default About;
