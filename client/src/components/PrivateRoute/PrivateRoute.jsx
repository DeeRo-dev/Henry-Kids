import { Route, Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";


export default function PrivateRoute({component: Component, ...rest}) {
    auth.onAuthStateChanged((user) => {
        console.log(user)
    });
    return(
        <Route {...rest}> {auth ? <Component/> : <Navigate to={'/'}/> }</Route>
    )
}



