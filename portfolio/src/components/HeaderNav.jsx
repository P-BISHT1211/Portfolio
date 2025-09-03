import PropTypes from 'prop-types'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FaMoon, FaSun } from 'react-icons/fa'

function HeaderNav({ theme, onToggleTheme }) {
  return (
    <Navbar expand="lg" bg="body" className="border-bottom fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">YourName<span className="text-primary">.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <Button variant="outline-secondary" size="sm" onClick={onToggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </Button>
            <a href="#contact" className="btn btn-primary btn-sm">Hire Me</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

HeaderNav.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

export default HeaderNav

