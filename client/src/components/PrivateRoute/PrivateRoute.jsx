import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

class PrivateRoute extends React.Component {
    render() {
        const {
            type,
            history,
            ...rest
        } = this.props;
        const {
            isLoggedIn,
        } = this.context;

        if (type === 'private' && !isLoggedIn) {
            return <Redirect to="/" />;
        } else if (type === 'public' && isLoggedIn) {
            return <Redirect to="/home" />;
        }

        return <Route {...rest} />;
    };
}

PrivateRoute.contextType = AuthContext;

export default PrivateRoute;


// if (isAuthenticated) {
//     return <Route path="/home/student" element = {<Home/>}/>
//     // <Route path="/home/teacher" element = {<HomeTeacher/>}/>
//     // <Route path="/create-clase" element = {<FormularioClase/>}/>
//     // <Route path="/home/:id" element = {<ClassDetail/>}/> 
    
//       } else {
//           return <Redirect to="/" />
//         }
//     }


    
       



{/* <Route path="/" element={<LandingPage />} />
          <PrivateRoute type="public" path="/" component={LandingPage} />
          <Route path="/home/student" element={<Home />} />
          <Route path="/home/teacher" element={<HomeTeacher />} />
          <Route path="/create-clase" element={<FormularioClase />} />
          <Route path="/home/:id" element={<ClassDetail />} /> */}
