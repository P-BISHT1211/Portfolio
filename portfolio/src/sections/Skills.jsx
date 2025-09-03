import { Container, Row, Col, Badge } from 'react-bootstrap'

const SKILLS = [
  'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Bootstrap', 'Node.js', 'Git', 'Accessibility', 'Performance'
]

function Skills() {
  return (
    <section id="skills" className="section bg-body-tertiary">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="section-title">Skills</h2>
            <div className="section-subtitle">Technologies I work with</div>
            <div>
              {SKILLS.map((s) => (
                <Badge key={s} pill bg="primary" className="badge-skill">{s}</Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills

