import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Nav from "./components/Nav.jsx"
import Card from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/home" element = {<Nav/>}/>
        <Route path="/card" element = {<Card/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
