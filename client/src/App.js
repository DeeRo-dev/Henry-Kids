import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioClase from "./components/FormularioClase/FormularioClase";

function App() {
  return (
    /* Add Browser Route */
    <BrowserRouter>
      <div className="App">
        <FormularioClase/>c
      </div>
    </BrowserRouter>
  );
}

export default App;
