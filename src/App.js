import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/Diary" element={<Diary />} />
          <Route path="/New" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
