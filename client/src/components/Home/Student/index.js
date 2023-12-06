import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Student = () => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          Begin your journey with us by submitting your application, and let's explore the possibilities of shaping the future together! You can upload your resume in <br></br>
          <a href="https://www.drive.google.com">Drive Link </a>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Student;
