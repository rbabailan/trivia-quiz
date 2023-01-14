import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Pages && components
import Home from "../src/pages/Home";
import Quiz from "../src/pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
