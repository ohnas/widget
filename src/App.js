import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Widget from "./pages/widget/Widget";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/widget" element={<Home />} ></Route>
        <Route path="/widget/:name" element={<Widget />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
