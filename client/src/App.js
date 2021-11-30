import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { auth } from "../src/firebase/firebaseConfig";

function App() {
  let sessionPersistense = "";
  auth.onAuthStateChanged((user) => {
    sessionStorage.setItem("sessionUser", user.uid);
    console.log(sessionStorage.sessionUser);
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
         {/*  {!sessionPersistense ? ( */}
            <Route path="/" element={<LandingPage />} />
        {/*   ) : ( */}
            <Route path="/home/student" element={<Home />} />
       {/*    )} */}
          <Route path="/home/teacher" element={<HomeTeacher />} />
          <Route path="/create-clase" element={<FormularioClase />} />
          <Route path="/home/:id" element={<ClassDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* 
<Routes>
      {state.authed ?
        // Wait until we have the current user...
        currentUser ?
          <Route
            path='/'
            element={(() => {
              // Show a "no access" message if the user is NOT an App Admin doesn't have access to any schools at all (which includes not having access to anything INSIDE any school either)
              if (!currentUser.appAdministrator && currentUser.schoolIds?.length === 0) return <AdminNoAccess />
              return <Outlet />
            })()}
          >
            <Route
              path='/'
              element={(() => {
                // If the user is a super user, we return the <SuperAdmin /> component, which renders some of its own routes/nav.
                if (currentUser.appAdministrator) return <SuperAdmin />
                return <Outlet />
              })()}
            >
              <Route
                path='schools'
                element={(() => {
                  if (currentUser.schoolIds?.length === 1) {
                    return <Navigate to={`schools/schoolId`} />
                  } else {
                    return <AdminSchools />
                  }
                })()}
              />

              <Route path='users' children={<Users />} />
            </Route>

            <Route path={`schools/:schoolId`} element={<AdminSchool />} />

            <Route path='*' element={<Navigate to='schools' />} />
          </Route>
          :
          null
        :
        <>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />

          <Route path='*' element={<Navigate to='login' />} />
        </>
      }
    </Routes> */
