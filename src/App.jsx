import { useState } from "react";
import Modal from "./components/Modal";
import Contenedor from "./components/Contenerdor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contenedor />
      <Modal />
    </>
  );
}

export default App;
