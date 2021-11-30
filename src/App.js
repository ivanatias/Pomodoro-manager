import { useState } from "react";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import Container from "react-bootstrap/Container";
import SettingsContext from "./context/SettingsContext";
import './App.css';


function App() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [restMinutes, setRestMinutes] = useState(5);
  const [settings, setSettings] = useState(false);
  const showSettings = () => setSettings(true);
  const hideSettings = () => setSettings(false);


  return (
    <SettingsContext.Provider value={{
      workMinutes,
      restMinutes,
      setWorkMinutes,
      setRestMinutes,
      red: "#e83283",
      green: "#41d7a7",
    }}>

      {settings ?
        <Settings hideSettings={hideSettings} /> : (
          <>
            <Container as="header" className="py-2">
              <h1 className="text-center">Pomodoro Manager</h1>
              <p className="text-center text-light">Enhance your productivity by applying the pomodoro technique</p>
            </Container>
            <Container as="main">
              <Timer showSettings={showSettings} />
            </Container>
          </>
        )}

    </SettingsContext.Provider>
  );
}

export default App;
