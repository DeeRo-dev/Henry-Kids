import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
<<<<<<< HEAD
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { auth } from "../src/firebase/firebaseConfig";
import ProfileStudent from "./components/ProfileStudent/ProfileStudent";

function App() {
  let sessionPersistense = "";
  auth.onAuthStateChanged((user) => {
    // sessionStorage.setItem("sessionUser", user.uid);
    console.log(sessionStorage.sessionUser);
  });

=======
import ModifyClass from "./components/ModifyClass/ModifyClass";
import FavsContainer from "./components/FavsContainer/FavsContainer";

const studentRoutes = [
  { path: "/home/student", element: <Home /> },
  { path: "/home/student/:id", element: <ClassDetail /> },
  { path: "/prueba", element: <FavsContainer /> },
  { path: "/*", element: <Home /> }
];
const teacherRoutes = [
  { path: "/home/teacher", element: <HomeTeacher /> },
  { path: "home/create-clase", element: <FormularioClase /> },
  { path: "/modify", element: <ModifyClass /> },
  { path: "/*", element: <HomeTeacher /> }
];
const { type } = localStorage;

function App() {
>>>>>>> fbb77b48f46da3361dc16e31a89c25d4af5de366
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
<<<<<<< HEAD
         {/*  {!sessionPersistense ? ( */}
            <Route path="/" element={<LandingPage />} />
        {/*   ) : ( */}
            <Route path="/home/student" element={<Home />} />
       {/*    )} */}
       
       <Route path="/home/student/profile" element={<ProfileStudent />} />
          <Route path="/home/teacher" element={<HomeTeacher />} />
          <Route path="/create-clase" element={<FormularioClase />} />
          <Route path="/home/:id" element={<ClassDetail />} />
=======
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
>>>>>>> fbb77b48f46da3361dc16e31a89c25d4af5de366
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
