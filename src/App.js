import { useState } from "react";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import Taskselect from "./components/Taskselect";
import Container from "react-bootstrap/Container";
import './App.css';

function App() {
  const [settings, setSettings] = useState(false);

  const showSettings = () => setSettings(true);
  const hideSettings = () => setSettings(false);


  return (

    settings ? <Settings hideSettings={hideSettings} /> : (
      <>
        <Container as="header" className="py-2">
          <h1 className="text-center">Pomodoro Manager</h1>
          <p className="text-center text-light">Enhance your productivity by applying the pomodoro technique</p>
        </Container>
        <Container as="main">
          <Taskselect />
          <Timer showSettings={showSettings} />
        </Container>
      </>
    )
  );
}

export default App;
