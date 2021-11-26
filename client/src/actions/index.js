const axios = require('axios')


export function getAllclasses() {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/allClasses")    
        dispatch({ type: "GET_ALL_CLASSES", data: response.data });
    }

}