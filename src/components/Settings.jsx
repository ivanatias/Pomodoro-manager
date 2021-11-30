import React, { useContext } from "react";
import Btn from "./Btn";
import SettingsContext from "../context/SettingsContext";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Settings = ({ hideSettings }) => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <Container className="py-2">
      <h1 className="text-center">Settings</h1>
      <Row className="justify-content-center mt-3">
        <Col md={6} className="mb-3">
          <h4 className="mb-3">Work minutes: {settingsInfo.workMinutes}</h4>
          <Slider
            min={1}
            max={50}
            defaultValue={settingsInfo.workMinutes}
            value={settingsInfo.workMinutes}
            onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
            trackStyle={{
              backgroundColor: settingsInfo.red,
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <h4 className="mb-3">Rest minutes: {settingsInfo.restMinutes} </h4>
          <Slider
            min={1}
            max={10}
            defaultValue={settingsInfo.restMinutes}
            value={settingsInfo.restMinutes}
            onChange={(newValue) => settingsInfo.setRestMinutes(newValue)}
            trackStyle={{
              backgroundColor: settingsInfo.green,
            }}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={6} className="d-flex justify-content-center mx-auto">
          <Btn variant="primary" callback={hideSettings}>
            Go back to timer
          </Btn>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
