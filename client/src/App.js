import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
// import { auth } from "../src/firebase/firebaseConfig";
import ProfileStudent from "./components/ProfileStudent/ProfileStudent";
import ProfileTeacher from "./components/ProfileTeacher/ProfileTeacher";
import ModifyClass from "./components/ModifyClass/ModifyClass";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import FavsContainer from "./components/FavsContainer/FavsContainer";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin";
import Solicitudes from "./components/Solicitudes/Solicitudes";
import CropImage from "./components/CropImage/CropImage";
import FormCategory from "./components/FormCategory/FormCategory";
import About from "./components/About/About";
import Verificacion from "./components/Verificacion/Verificacion";
import Confirmation from "./components/Confirmation/Confirmation";

const studentRoutes = [
  { path: "/home/student", element: <Home /> },
  { path: "/home/student/:id", element: <ClassDetail /> },
  { path: "/*", element: <Home /> },
  { path: "/home/student/profile", element: <ProfileStudent /> },
  { path: "/home/student/register-teacher", element: <RegisterTeacher /> },
  { path: "/home/student/fav", element: <FavsContainer /> },
  { path: "/user/solicitud/lista", element: <Solicitudes /> },
  { path: "home/create-clase", element: <FormularioClase /> },
  { path: "/Verificacion/:id", element: <Verificacion /> },
];
const teacherRoutes = [
  { path: "/home/teacher", element: <HomeTeacher /> },
  { path: "home/create-clase", element: <FormularioClase /> },
  { path: "/home/teacher/profile", element: <ProfileTeacher /> },
  { path: "home/modify/:id", element: <ModifyClass /> },
  { path: "/*", element: <HomeTeacher /> },
  { path: "/cropImage", element: <CropImage /> },
  { path: "/user/solicitud/lista", element: <Solicitudes /> },
  { path: "/home/teacher/:id", element: <ClassDetail /> },
  { path: "/Verificacion/:id", element: <Verificacion /> },
  { path: "/home/admin/FormCategory", element: <FormCategory /> },
];

const admin = [
  { path: "/home/admin", element: <HomeAdmin /> },
  { path: "/*", element: <HomeAdmin /> },
  { path: "/home/admin/FormCategory", element: <FormCategory /> },
  { path: "/user/solicitud/lista", element: <Solicitudes /> },
];

const confirmacionRoutes = [
  { path: "/home/confirmacion", element: <Confirmation /> },
  { path: "/Verificacion/:id", element: <Verificacion /> },
  { path: "/*", element: <LandingPage /> },
];

const publicRoutes = [
  { path: "/*", element: <LandingPage /> },
  { path: "/about", element: <About /> },
];

const { type } = localStorage;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {type === "student"
            ? studentRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : type === "teacher"
              ? teacherRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : type === "admin"
            ? admin.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })
            : type === "confirmacion"
            ? confirmacionRoutes.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })
            : publicRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })}
           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
