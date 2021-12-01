import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
/* function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {localStorage.type === "student" ?
          <> 
          
          <Route path="/home/student" element={<Home />} />
          <Route path="/home/:id" element={<ClassDetail />} />
          </>
          : localStorage.type === "teacher" ?
          
          <>
           
          <Route path="/home/teacher" element={<HomeTeacher />} />
          <Route path="home/create-clase" element={<FormularioClase />} />
          </>
          : <><Navigate to="/" element={<LandingPage />} /></>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
} */

const studentRoutes = [
  { path: "/home/student", element: <Home /> },
  { path: "/home/:id", element: <ClassDetail /> },
];
const teacherRoutes = [
  { path: "/home/teacher", element: <HomeTeacher /> },
  { path: "home/create-clase", element: <FormularioClase /> },
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
