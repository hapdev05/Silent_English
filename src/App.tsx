import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Letgo3 from "./components/Letgo3";
import Letgo4 from "./components/Letgo4";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Silent_English" element={<HomePage/>} />
          <Route path="/let-go-3" element={<Letgo3/>} />
          <Route path="/let-go-4" element={<Letgo4/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
