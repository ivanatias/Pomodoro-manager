import Timer from "./components/Timer";
import Taskselect from "./components/Taskselect";
import Container from "react-bootstrap/Container";
import './App.css';

function App() {
  return (
    <>
      <Container as="header" className="py-2">
        <h1 className="text-center">Pomodoro Manager</h1>
        <p className="text-center text-light">Enhance your productivity by applying the pomodoro technique</p>
      </Container>

      <Container as="main">
        <Taskselect />
        <Timer />
      </Container>
    </>
  );
}

export default App;
