import HomePage from "./components/HomePage";
import Letgo3 from "./components/Letgo3/Letgo3";
import Letgo4 from "./components/Letgo4/Letgo4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-home" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/let-go-3" element={<Letgo3 />} />
          <Route path="/let-go-4" element={<Letgo4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
