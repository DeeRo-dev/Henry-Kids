import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import {AuthContextProvider} from "./firebase/auth"
import Root from "./components/root/root";
function App() {
  return (
    <BrowserRouter>
     <AuthContextProvider>
      <div className="App">
      <Root>
        <Routes>
          <PrivateRoute type="private" path="/home" element={<Home/>} />
          <PrivateRoute type="public" path="/" component={LandingPage} />
        </Routes>
        </Root>
      </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
