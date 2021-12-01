import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";

const studentRoutes = [
  { path: "/home/student", element: <Home /> },
  { path: "/home/student/:id", element: <ClassDetail /> },
  { path: "/*", element: <Home /> }
];
const teacherRoutes = [
  { path: "/home/teacher", element: <HomeTeacher /> },
  { path: "home/create-clase", element: <FormularioClase /> },
  { path: "/*", element: <HomeTeacher /> }
];
const { type } = localStorage;
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
          type === "student"
            ? studentRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : type === "teacher" 
            ? teacherRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : <Route path="/*" element={<LandingPage />} />
              }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
