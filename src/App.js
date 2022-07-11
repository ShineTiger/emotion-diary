import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
  //process.env.PUBLIC_URL 정상적으로 되지 않을때
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || ""; //env.PUBLIC_URL 이 참이면 url을 담고 아니면 빈값으로 둬라

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        {/* process.env 를 이용해서 경로를 가져다가 바로 쓸 수 있다.  */}
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/Diary/:id" element={<Diary />} />
          <Route path="/New" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
