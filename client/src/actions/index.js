const axios = require('axios')


export function getAllclasses() {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/allClasses")    
        dispatch({ type: "GET_ALL_CLASSES", data: response.data });
    }

}

export function getClassById(id){
    return async function(dispatch){
        let response= await axios.get(`http://localhost:3001/class/${id}`)
         dispatch({ type: 'GET_CLASS_BY_ID', data: response.data })
    }
    
}
