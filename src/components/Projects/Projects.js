import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="HOTEL BOOKING SYSTEM"
              description="The project Hotel Booking System is a web-based application that allows the hotel manager to handle all hotel activities online, Interactive GUI and the ability to manage various hotel bookings and rooms make this system very flexible and convenient."
              ghLink="https://github.com/Malothu07/HSB-Hotel-Booking-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Crypto-Tracker"
              description="A live crypto-tracking project provides real-time updates on cryptocurrency prices, market trends, and portfolio performance. Users can monitor various cryptocurrencies, set alerts for price changes, and access historical data. The platform offers interactive charts, news feeds, and analytical tools to help users make informed investment decisions in the volatile crypto market."
              ghLink="https://github.com/Malothu07/crypto-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Prediction"
              description="An age and country prediction project uses machine learning to estimate a person's age and nationality based on their name. By analyzing patterns in a large dataset of names, the system provides probable age ranges and country origins, aiding in demographic research, marketing strategies, and personalized user experiences."
              ghLink="https://github.com/Malothu07/next-js-aws"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
