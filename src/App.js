import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/widget" element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
