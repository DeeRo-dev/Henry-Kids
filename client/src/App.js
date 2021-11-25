import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/create-clase" element = {<FormularioClase/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
