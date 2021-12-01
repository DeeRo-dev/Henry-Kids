const axios = require('axios')


export function getAllclasses() {
    return async function (dispatch) {
        let response = await axios.get("https://henry-kids.herokuapp.com/class")    
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
      let response = await axios.post("https://henry-kids.herokuapp.com/class", input)    
      dispatch({ type: "CREATE_CLASS", data: response.data });
  }

}
export function postUser(input) {
        return async (dispatch) => {
          const json = await axios.post("https://henry-kids.herokuapp.com/user", input);
          return dispatch({
            type: "POST_USER",
            payload: json.data,
          });
        };
      }

      export function getClassById(id){
    return async function(dispatch){
        let response= await axios.get(`https://henry-kids.herokuapp.com/class/${id}`)
         dispatch({ type: 'GET_CLASS_BY_ID', data: response.data })
    }   
}

export function getFavorites(idUs) {
  return async function (dispatch) {
    let response = await axios.get(`https://henry-kids.herokuapp.com/fav/${idUs}`)
    dispatch({ type: 'GET_FAVORITES', data: response.data })
  }
}

export function ModifyClasses(id, input) {
  return async function (dispatch) {
    let response = await axios.put(`https://henry-kids.herokuapp.com/class/${id}`, input)
    dispatch({ type: 'MODIFY_CLASSES', data: response.data })
  }
}