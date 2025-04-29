import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Get In Touch</h2>
                  <p className="contact-link">
                    <span className="contact-text">Email:</span> <a href="mailto:lrdelacerna1@up.edu.ph">lrdelacerna1@up.edu.ph</a>
                  </p>
                  <p className="contact-link">
                    <span className="contact-text">GitHub:</span> <a href="https://github.com/lrdelacerna1" target="_blank" rel="noopener noreferrer">https://github.com/lrdelacerna1</a>
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
