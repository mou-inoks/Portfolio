import React from "react";
import Card from "react-bootstrap/Card";
import { projects } from "../Constant";

const ProjectCards = () => {
    projects.map((props) => {
      return (
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.content}
            </Card.Text>
            {"\n"}
            {"\n"}
          </Card.Body>
        </Card>
      );
    });
  };
export default ProjectCards;
