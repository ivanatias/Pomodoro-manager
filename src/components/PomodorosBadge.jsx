import React from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";

const PomodorosBadge = ({ text, bg }) => {
  return (
    <Col className="d-flex justify-content-center" md={6}>
      <Badge bg={bg}>{text}</Badge>
    </Col>
  );
};

export default PomodorosBadge;
