import Login from "./routes/Login/Login";
import SignUp from "./routes/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>

    </Router>
  );
}

export default App;
