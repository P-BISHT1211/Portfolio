import { Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-top py-4 mt-5">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="text-secondary">© {year} Your Name. All rights reserved.</div>
        <div className="d-flex gap-3">
          <a href="https://github.com/" className="text-secondary" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/" className="text-secondary" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com/" className="text-secondary" aria-label="Twitter" target="_blank" rel="noreferrer"><FaXTwitter size={20} /></a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

