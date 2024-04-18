import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Widget from "./pages/widget/Widget";
import FlipClock from "./components/FlipClock";

function App() {

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/:name" element={<Widget />} ></Route>
        <Route path="/embeds/flipclock" element={<FlipClock />} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
