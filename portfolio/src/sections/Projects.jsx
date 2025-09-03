import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const PROJECTS = [
  {
    title: 'Project One',
    description: 'A modern web app built with React and Bootstrap.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A performant single-page application with clean UI.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard with responsive charts.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <h2 className="section-title">Projects</h2>
            <div className="section-subtitle">Selected work</div>
          </Col>
        </Row>
        <Row className="g-4">
          {PROJECTS.map((p) => (
            <Col md={6} lg={4} key={p.title}>
              <Card className="h-100 project-card">
                <Card.Img variant="top" src={p.image} alt={p.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{p.description}</Card.Text>
                  <Button variant="outline-primary" href={p.link} target="_blank" rel="noreferrer">View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects

