import { async } from '@firebase/util';

const axios = require('axios')


export function getAllclasses() {
  return async function (dispatch) {
    let response = await axios.get("/class")
    dispatch({ type: "GET_ALL_CLASSES", data: response.data });
  }

}
export function searchClass(name) {
  return async function (dispatch) {
    return dispatch({
      type: "SEARCH_CLASS",
      payload: name,
    });
  }
}

export function getAllClassTeacher(idUser) {
  return async function (dispatch) {
    let response = await axios.get(`/cursos/${idUser}`)
    dispatch({
      type: "GET_ALL_CLASSES_TEACHER",
      data: response.data
    });
  }
}
export function editUser(id, user) {
  return async function (dispatch) {
    let userUpdate = await axios.put(`/user/${id}`, user);
      dispatch({
      type: "EDIT_USER",
      currentUser: userUpdate
    });
  };
}


export function getUser(input) {
  return async (dispatch) => {
    const json = await axios.get(`/user/${input}`);
      dispatch({
      type: "GET_USER",
      payload: json.data,
    });
  };
}


export function postUser(input) {
  return async (dispatch) => {
    const json = await axios.post("/user", input);
      dispatch({
      type: "POST_USER",
      payload: json.data,
    });
  };
}

export function createClass(input) {
  return async function (dispatch) {
    let response = await axios.post("/class", input);
    dispatch({ type: "CREATE_CLASS", data: response.data });
  };
}

export function getClassById(id) {
  return async function (dispatch) {
    let response = await axios.get(`/class/${id}`);
    dispatch({ type: "GET_CLASS_BY_ID", data: response.data });
  };
}

export function getFavorites(idUs) {
  return async function (dispatch) {
    let response = await axios.get(`/fav/${idUs}`);
    dispatch({ type: "GET_FAVORITES", data: response.data });
  };
}

export function ModifyClasses(id, input) {
  
  return async function (dispatch) {console.log(id)
    let response = await axios.put(`/class/${id}`, input);
    dispatch({ type: "MODIFY_CLASSES", data: response.data });
  };
}

export function DeleteClass(id) {
  return async function (dispatch) {
    let response = await axios.delete(`/class/${id}`)
    dispatch({ type: 'DELETE_CLASSES', data: response.data })
  }
}
export function getCategory(){
  return async function(dispatch){
    var info = await axios.get("/category/name")
    return dispatch({
      type: "GET_CATEGORY",
      payload: info.data
    })
  }
}

export function getCategoryAll(){
  return async function(dispatch){
    var info = await axios.get("/category")
    console.log(info)
    return dispatch({
      type: "GET_CATEGORY_ALL",
      payload: info.data
    })
  }
}

export function difficultyFilter(input) {
  return async function (dispatch) {
    let response = await axios.get('/class?filter=difficulty&difficulty=' + input);
    dispatch({ type: 'DIFFICULTY_FILTER', data: response.data })
  }
}

export function setFavorite(idUser, id) {
  return async function (dispatch) {
    let response = await axios.post(`/fav/${idUser}/${id}`); 
    dispatch({ type: 'SET_FAVORITE', response })
  }
}
  

