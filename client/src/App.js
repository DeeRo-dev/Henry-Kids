import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    /* Add Browser Route */
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
