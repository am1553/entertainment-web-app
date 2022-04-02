import Login from "./routes/Login/Login";
import SignUp from "./routes/SignUp/SignUp";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main/Main";






function App() {
  return (
    <Router hashType='hashbang' >

      <Routes>
        <Route exact path="/" element={ <Main /> }/>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>

    </Router>
  );
}

export default App;
