import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>logo</h1>    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Edit" element={<Edit />}/>
          <Route path="/Diary" element={<Diary />}/>
          <Route path="/New" element={<New />}/>
        </Routes>
        <RouteTest />
        </div>
      </BrowserRouter>
      
    
  );
}

export default App;
