import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link} from 'react-router-dom'
import Nav from "./components/Nav"
function App() {
  return (
    /* Add Browser Route */
    <BrowserRouter>
      <div className="App">
      <Nav/>
        <Routes>
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
