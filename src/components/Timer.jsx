import React from "react";
import { Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import Btn from "./Btn";
import "react-circular-progressbar/dist/styles.css";

const Timer = ({ showSettings }) => {
  return (
    <>
      <Row className="pt-1">
        <Col className="d-flex justify-content-center">
          <CircularProgressbar value={60} text={"min:sec"} className="timer" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="d-flex justify-content-center">
          <Btn role="pause" variant="primary" />
          <Btn role="play" variant="success" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Btn role="settings" variant="secondary" callback={showSettings} />
        </Col>
      </Row>
    </>
  );
};

export default Timer;
