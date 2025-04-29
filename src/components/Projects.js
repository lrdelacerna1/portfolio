import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pantrypal1 from "../assets/img/pantrypal1.png";
import pantrypal3 from "../assets/img/pantrypal3.png";
import pantrypal4 from "../assets/img/pantrypal4.png";
import pantrypal5 from "../assets/img/pantrypal5.png";
import kimi from "../assets/img/.kimi.png";
import kimi1 from "../assets/img/kimi1.png";
import kimi2 from "../assets/img/kimi2.png";
import kimi3 from "../assets/img/kimi3.png";
import snackrifice from "../assets/img/snackrifice.png";
import snackrifice1 from "../assets/img/snackrifice2.png";
import snackrifice2 from "../assets/img/snackrifice3.png";
import snackrifice3 from "../assets/img/snackrifice1.png";
import connectfour from "../assets/img/connect4.png";
import connectfour1 from "../assets/img/connect41.png";
import connectfour2 from "../assets/img/connect42.png";
import connectfour3 from "../assets/img/connect43.png";
import laagain from "../assets/img/laagain.png";
import laagain1 from "../assets/img/laagain1.png";
import laagain2 from "../assets/img/laagain2.png";
import laagain3 from "../assets/img/laagain3.png";
import laagain4 from "../assets/img/laagain4.png";
import laagain5 from "../assets/img/laagain5.png";
import laagain6 from "../assets/img/laagain6.png";
import laagain7 from "../assets/img/laagain7.png";
import laagain8 from "../assets/img/laagain8.png";
import laagain9 from "../assets/img/laagain9.png";
import laagain10 from "../assets/img/laagain10.png";
import laagain11 from "../assets/img/laagain11.png";
import laagain12 from "../assets/img/laagain12.png";
import laagain13 from "../assets/img/laagain13.png";
import laagain14 from "../assets/img/laagain14.png";
import laagain15 from "../assets/img/laagain15.png";
import laagain16 from "../assets/img/laagain16.png";
import laagain17 from "../assets/img/laagain17.png";
import laagain18 from "../assets/img/laagain18.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from 'react';

export const Projects = () => {

  const [activeTab, setActiveTab] = useState("second");

  const tabDescriptions = {
    first: "PantryPal is a second-year final project focused on database management. It lets you add and edit meals, and combine ingredients to create your personalized grocery list. I worked on the database and connected it to the frontend.",
    second:"KIMI is a second-year project for the design and implementation of a programming language, serving as both an IDE and a compiler. It includes scanning, parsing, and translating code into MIPS assembly. I handled the full backend—integrating the scanner, parser, and assembly generation. I even designed the custom language using my native tongue, Waray.",
    third: "Snackrifice is a group final project for a vending machine concept tailored to UP Cebu students. I was responsible for the UX/UI design and frontend development, working with the team to integrate everything into the final product.",
    fourth: "Connect Four is a group final project from my first year, where we were tasked with coding a game. Built using C, it features classic gameplay. I handled the backend and implemented the game logic.",
    fifth: "Laagain is a collaborative travel planning app prototype we pitched at the DICT Innovation Challenge. It allows users to vote and annotate real-time trip plans. The app also features budget trackers, emergency numbers for direct calling, and the ability to compare flights and accommodations.",
  };

  const projects1 = [
    {
      title: "PantryPal",
      description: "Design & Development",
      imgUrl: pantrypal1,
    },
    {
      title: "PantryPal",
      description: "Design & Development",
      imgUrl: pantrypal3,
    },
    {
      title: "PantryPal",
      description: "Design & Development",
      imgUrl: pantrypal4,
    },
    {
      title: "PantryPal",
      description: "Design & Development",
      imgUrl: pantrypal5,
    },
  ];

  const projects2 = [
    {
      title: ".Kimi",
      description: "Design & Development",
      imgUrl: kimi,
    },
    {
      title: ".Kimi",
      description: "Design & Development",
      imgUrl: kimi1,
    },
    {
      title: ".Kimi",
      description: "Design & Development",
      imgUrl: kimi2,
    },
    {
      title: ".Kimi",
      description: "Design & Development",
      imgUrl: kimi3,
    },
  ];

  const projects3 = [
    {
      title: "Snackrifice",
      description: "Design & Development",
      imgUrl: snackrifice,
    },
    {
      title: "Snackrifice",
      description: "Design & Development",
      imgUrl: snackrifice1,
    },
    {
      title: "Snackrifice",
      description: "Design & Development",
      imgUrl: snackrifice2,
    },
    {
      title: "Snackrifice",
      description: "Design & Development",
      imgUrl: snackrifice3,
    },
  ];

  const projects4 = [
    {
      title: "Connect4",
      description: "Design & Development",
      imgUrl: connectfour,
    },
    {
      title: "Connect4",
      description: "Design & Development",
      imgUrl: connectfour1,
    },
    {
      title: "Connect4",
      description: "Design & Development",
      imgUrl: connectfour2,
    },
    {
      title: "Connect4",
      description: "Design & Development",
      imgUrl: connectfour3,
    },
  ];

  const projects5 = [
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain1,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain2,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain3,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain4,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain5,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain6,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain7,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain8,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain9,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain10,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain11,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain11,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain12,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain13,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain14,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain15,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain16,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain17,
    },
    {
      title: "Laagain",
      description: "Design & Development",
      imgUrl: laagain18,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>{tabDescriptions[activeTab]}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setActiveTab(k)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pantrypal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">.KIMI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Snackrifice</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Connect Four</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Laagain</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                  <p className="text-center">{tabDescriptions["first"]}</p>
                  <div className="tech-stack">
                    <span className="tech-box">ReactJS</span>
                    <span className="tech-box">Node.js</span>
                    <span className="tech-box">My SQL</span>
                    <span className="tech-box">ExpressJS</span>
                  </div>
                    {/* First card in its own row */}
                    <Row className="justify-content-center mt-5 mb-5">
                      <Col xs={12} md={8} className="d-flex justify-content-center">
                        <ProjectCard {...projects1[0]} big={true} />
                      </Col>
                    </Row>

                    {/* Remaining cards in a new row */}
                    <Row className="justify-content-center mt-4 mb-5">
                      {projects1.slice(1).map((project, index) => (
                        <Col
                          key={index}
                          xs={12}
                          md={4}
                          className="mb-4 d-flex justify-content-center"
                        >
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p className="text-center">{tabDescriptions["second"]}</p>
                      <div className="tech-stack">
                        <span className="tech-box">Netbeans</span>
                        <span className="tech-box">JavaFX</span>
                        <span className="tech-box">Java</span>
                        <span className="tech-box">Lexing and Analyzing</span>
                        <span className="tech-box">Scanning</span>
                        <span className="tech-box">Parsing</span>
                      </div>
                      {/* First card (big) with animation */}
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <Row className={`justify-content-center mt-5 mb-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                            <Col xs={12} md={8} className="d-flex justify-content-center">
                              <ProjectCard {...projects2[0]} big={true} />
                            </Col>
                          </Row>
                        )}
                      </TrackVisibility>

                      {/* Remaining cards (small) in new row */}
                      <Row className="justify-content-center mt-4 mb-5">
                        {projects2.slice(1).map((project, index) => (
                          <Col
                            key={index}
                            xs={12}
                            md={4}
                            className="mb-4 d-flex justify-content-center"
                          >
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p className="text-center">{tabDescriptions["third"]}</p>
                    <div className="tech-stack">
                        <span className="tech-box">ReactJS</span>
                        <span className="tech-box">Ux/Ui</span>
                        <span className="tech-box">Web Dev</span>
                    </div>
                    
                  {/* First card (big) with animation */}
                  <TrackVisibility once>
                    {({ isVisible }) => (
                      <Row className={`justify-content-center mt-5 mb-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                        <Col xs={12} md={8} className="d-flex justify-content-center">
                          <ProjectCard {...projects3[0]} big={true} />
                        </Col>
                      </Row>
                    )}
                  </TrackVisibility>

                  {/* Remaining cards (small) in new row */}
                  <Row className="justify-content-center mt-4 mb-5">
                    {projects3.slice(1).map((project, index) => (
                      <Col
                        key={index}
                        xs={12}
                        md={4}
                        className="mb-4 d-flex justify-content-center"
                      >
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <p className="text-center">{tabDescriptions["fourth"]}</p>
                <div className="tech-stack">
                        <span className="tech-box">Game Dev</span>
                        <span className="tech-box">SFML</span>
                        <span className="tech-box">C++</span>
                </div>
                  {/* First card (big) with animation */}
                  <TrackVisibility once>
                    {({ isVisible }) => (
                      <Row className={`justify-content-center mt-5 mb-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                        <Col xs={12} md={8} className="d-flex justify-content-center">
                          <ProjectCard {...projects4[0]} big={true} />
                        </Col>
                      </Row>
                    )}
                  </TrackVisibility>

                  {/* Remaining cards (small) in new row */}
                  <Row className="justify-content-center mt-4 mb-5">
                    {projects4.slice(1).map((project, index) => (
                      <Col
                        key={index}
                        xs={12}
                        md={4}
                        className="mb-4 d-flex justify-content-center"
                      >
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                <p className="text-center">{tabDescriptions["fifth"]}</p>
                  <Row className="justify-content-center mt-4 mb-5">
                    {projects5.map((project, index) => (
                      <Col
                        key={index}
                        xs={12}
                        md={3} // smaller column to reduce width
                        className="mb-4 d-flex justify-content-center"
                      >
                        <ProjectCard {...project} small={true} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}  
