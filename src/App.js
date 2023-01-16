import "./App.css";
import Goborning from "./coponent/Home/Router/Goborning";
import Home from "./coponent/Home/Router/Home";
import MP from "./coponent/Home/Router/MP";

import Prothisthan from "./coponent/Home/Router/Prothisthan";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Prothisthan />} />
        <Route path="/academic" element={<MP />} />
        <Route path="/govt" element={<Goborning />} />
      </Routes>
      {/* <Prothisthan />
        <Goborning />
        <MP /> */}
    </div>
  );
}

export default App;
