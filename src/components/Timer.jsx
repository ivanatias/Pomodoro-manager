import React, { useContext, useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Btn from "./Btn";
import PomodorosBadge from "./PomodorosBadge";
import SettingsContext from "../context/SettingsContext";
import "react-circular-progressbar/dist/styles.css";

const Timer = ({ showSettings }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // Can be: Work / Rest / Long Rest
  const [pomodoros, setPomodoros] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(null);

  const timerInfo = useContext(SettingsContext);

  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const secondsLeftRef = useRef(secondsLeft);
  const pomodorosRef = useRef(pomodoros);

  const totalSeconds =
    mode === "work"
      ? timerInfo.workMinutes * 60
      : mode === "longrest"
      ? timerInfo.restMinutes * 4 * 60
      : timerInfo.restMinutes * 60;

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) return;

      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [timerInfo]);

  const initTimer = () => {
    secondsLeftRef.current = totalSeconds;
    setSecondsLeft(secondsLeftRef.current);
  };

  const switchMode = () => {
    const nextMode =
      modeRef.current === "work"
        ? pomodorosRef.current === 4
          ? "longrest"
          : "rest"
        : "work";
    const nextSeconds =
      nextMode === "work"
        ? timerInfo.workMinutes * 60
        : nextMode === "longrest"
        ? timerInfo.restMinutes * 4 * 60
        : timerInfo.restMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;

    if (modeRef.current === "rest") {
      addPomodoro();
    }

    if (modeRef.current === "longrest") {
      pomodorosRef.current = 0;
      setPomodoros(pomodorosRef.current);
    }
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const addPomodoro = () => {
    const nextPomodoro = pomodorosRef.current + 1;
    setPomodoros(nextPomodoro);
    pomodorosRef.current = nextPomodoro;
  };

  const togglePause = () => {
    setIsPaused(!isPausedRef.current);
    isPausedRef.current = isPaused === true ? false : true;
  };

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const showMinutes = Math.floor(secondsLeft / 60);
  let showSeconds = secondsLeft % 60;

  if (showSeconds < 10) {
    showSeconds = "0" + showSeconds;
  }

  const color = mode === "work" ? timerInfo.red : timerInfo.green;

  return (
    <>
      <Row className="pt-1">
        <Col className="d-flex justify-content-center">
          <CircularProgressbar
            value={percentage}
            text={`${showMinutes}:${showSeconds}`}
            className="timer"
            counterClockwise="true"
            styles={buildStyles({
              pathTransition: 1,
              textColor: "#fff",
              pathColor: color,
            })}
          />
        </Col>
      </Row>
      <Row className="justify-content-center my-1">
        {pomodoros === 0 && mode === "longrest" ? (
          <PomodorosBadge bg="success" text="Take a long break!" />
        ) : (
          <PomodorosBadge bg="primary" text={`Pomodoros: ${pomodoros}`} />
        )}
      </Row>
      <Row className="mt-2">
        <Col className="d-flex justify-content-center">
          {isPaused ? (
            <Btn role="play" variant="success" callback={togglePause} />
          ) : (
            <Btn role="pause" variant="primary" callback={togglePause} />
          )}
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
