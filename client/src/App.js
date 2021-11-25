import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Nav from "./components/Nav/Nav.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/home" element = {<Nav/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
