import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Malothu Samuel </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I am currently interning  as a fullstack developer at AIVariant.
            <br />
            I am a final year student pursuing a B.Com in Computers.
            <br />
            <br />
            Apart from coding, some other activities that I love to do which includes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending Tech Meetups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Samuel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
