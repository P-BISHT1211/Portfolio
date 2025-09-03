import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle">A quick introduction</div>
            <p>
              I am a frontend developer with a passion for crafting clean, modern interfaces and delightful user experiences. I enjoy working with React, TypeScript, and design systems, and I care deeply about performance and accessibility.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

