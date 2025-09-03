import { Container, Row, Col, Button } from 'react-bootstrap'

function Hero() {
  return (
    <section id="home" className="hero section">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={7}>
            <div className="mb-3 text-primary fw-semibold">Hello, I am</div>
            <h1 className="hero-title">Your Name</h1>
            <p className="hero-tagline">Frontend Developer focused on building modern, accessible, and performant web experiences.</p>
            <div className="d-flex gap-3 mt-4">
              <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
              <Button variant="outline-secondary" size="lg" href="#contact">Contact Me</Button>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-md-end justify-content-center">
            <div className="avatar">YN</div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

