import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/git.svg";
import navIcon2 from "../assets/img/gmailcon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
         
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/mosesbabu"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:mosesarara@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Design by Moses  Contact me  : <a href="mailto:mosesarara@gmail.com" > mosesarara@gmail.com </a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
