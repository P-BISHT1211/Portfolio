import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <section id="contact" className="section bg-body-tertiary">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <h2 className="section-title">Contact</h2>
            <div className="section-subtitle">Let’s build something great</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Form action="https://formspree.io/f/xyyylwrd" method="POST">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="you@example.com" required />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={5} placeholder="How can I help?" required />
                  </Form.Group>
                </Col>
                <Col xs={12} className="pt-2">
                  <Button type="submit" variant="primary">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

