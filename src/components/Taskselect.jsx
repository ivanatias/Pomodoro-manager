import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Taskselect = () => {
  return (
    <Row className="mb-2">
      <Col className="d-flex justify-content-center">
        <Form.Select
          aria-label="Select Pomodoro Task"
          className="task-select"
          required
        >
          <option value="" disabled>
            Select your option
          </option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default Taskselect;
