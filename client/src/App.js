import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <PrivateRoute path="/dashboard" auth={auth} component={Home} /> */}
        <Route path="/home/student" element={<Home />} />
        <Route path="/home/teacher" element={<HomeTeacher />} />
        <Route path="/create-clase" element={<FormularioClase />} />
        <Route path="/home/:id" element={<ClassDetail />} />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
