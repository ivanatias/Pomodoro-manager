import React from "react";
import Btn from "./Btn";
import Tasklist from "./Tasklist";
import { Container, Row, Col, Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Settings = ({ hideSettings }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="py-2">
      <h1 className="text-center">Settings</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group controlId="PomodoroTaskInput">
              <Form.Control type="text" placeholder="Task name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="mb-3">
            <h4 className="text-center">Work minutes: </h4>
            <Slider />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <h4 className="text-center">Rest minutes: </h4>
            <Slider />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6} className="d-flex justify-content-center mx-auto">
            <Btn variant="primary" type="submit">
              Set Pomodoro
            </Btn>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-center mx-auto">
            <Btn variant="secondary" callback={hideSettings}>
              Go back to timer
            </Btn>
          </Col>
        </Row>
      </Form>
      <Tasklist />
    </Container>
  );
};

export default Settings;
