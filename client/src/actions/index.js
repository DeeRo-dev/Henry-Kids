const axios = require('axios')


export function getAllclasses() {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/class")    
        dispatch({ type: "GET_ALL_CLASSES", data: response.data });
    }

}
// export function getAllClassTeacher(id) {
//   return async function (dispatch) {
//       let response = await axios.get(`http://localhost:3001/cursos/${id}`)    
//       dispatch({ 
//         type: "GET_ALL_CLASSES_TEACHER",
//        data: response.data 
//       });
//   }

// }

export function createClass(input) {
  return async function (dispatch) {
      let response = await axios.post("http://localhost:3001/class", input)    
      dispatch({ type: "CREATE_CLASS", data: response.data });
  }

}
export function postUser(input) {
        return async (dispatch) => {
          const json = await axios.post("http://localhost:3001/user", input);
          return dispatch({
            type: "POST_USER",
            payload: json.data,
          });
        };
      }
export function getClassById(id){
    return async function(dispatch){
        let response= await axios.get(`http://localhost:3001/class/${id}`)
         dispatch({ type: 'GET_CLASS_BY_ID', data: response.data })
    }
    
}
