import { async } from "@firebase/util";

const axios = require("axios");

export function sendComment(text) {
  return async function (dispatch) {
    let response = await axios.post("/comment", text);
    dispatch({ type: "SEND_COMMENT", data: response.data });
  };
}

export function getAllClasses() {
  return async function (dispatch) {
    let response = await axios.get("/class");
    dispatch({ type: "GET_ALL_CLASSES", data: response.data });
  };
}
export function searchClass(payload) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/class?title=${payload}`);
      return dispatch({
        type: "SEARCH_CLASS",
        payload: json.data,
        dataLength: payload.length,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function filterCategory(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/class?filter=category&category_id=${id}`);
      return dispatch({
        type: "FILTER_BY_CATEGORY",
        payload: id === "all" ? "all" : json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function filterCategoryTeacher(id) {
  return async (dispatch) => {
    return dispatch({
      type: "FILTER_BY_CATEGORY_TEACHER",
      payload: id,
    });
  };
}

export function getAllClassTeacher(idUser) {
  return async function (dispatch) {
    let response = await axios.get(`/cursos/${idUser}`);
    dispatch({
      type: "GET_ALL_CLASSES_TEACHER",
      data: response.data,
    });
  };
}

export function editUser(id, user) {
  return async function (dispatch) {
    let userUpdate = await axios.put(`/user/${id}`, user);
    dispatch({
      type: "EDIT_USER",
      currentUser: userUpdate,
    });
  };
}

export function getUser(input) {
  return async (dispatch) => {
    const json =
      input === "All"
        ? await axios.get("/user")
        : await axios.get(`/user/${input}`);
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
    console.log(response.data, idUs);
    dispatch({ type: "GET_FAVORITES", data: response.data });
  };
}

export function ModifyClasses(id, input) {
  return async function (dispatch) {
    console.log(id);
    let response = await axios.put(`/class/${id}`, input);
    dispatch({ type: "MODIFY_CLASSES", data: response.data });
  };
}

export function DeleteClass(id) {
  return async function (dispatch) {
    await axios.delete(`/class/${id}`);
    dispatch({ type: "DELETE_CLASSES", data: id });
  };
}
export function getCategory() {
  return async function (dispatch) {
    var info = await axios.get("/category/name");
    return dispatch({
      type: "GET_CATEGORY",
      payload: info.data,
    });
  };
}

export function getCategoryAll() {
  return async function (dispatch) {
    var info = await axios.get("/category");
    console.log(info);
    return dispatch({
      type: "GET_CATEGORY_ALL",
      payload: info.data,
    });
  };
}

export function setFavorite(idUser, id) {
  return async function (dispatch) {
    let response = await axios.post(`/fav/${idUser}/${id}`);
    dispatch({ type: "SET_FAVORITE", response });
  };
}

export function filterDifficulty(input) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/class?filter=difficulty&difficulty=${input}`
      );
      return dispatch({
        type: "FILTER_BY_DIFFICULTY",
        payload: input === "all" ? "all" : response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function removeFavorite(idUser, id) {
  return async function (dispatch) {
    const response = await axios.delete(`/fav/${idUser}/${id}`);
    dispatch({ type: "REMOVE_FAVORITE", data: id });
  };
}

export function getValoracion(id) {
  return async function (dispatch) {
    var info = await axios.get(`/evaluation/${id}`);
    // console.log(info);
    return dispatch({
      type: "GET_VALORACION",
      payload: info.data,
    });
  };
}


export function getClasEvaUs(id) {
  return async function (dispatch) {
    var info = await axios.get(`/evaluation/claseEval/${id}`);
    console.log(info);
    return dispatch({
      type: "GET_CLASEVAL",
      payload: info.data[0].Evaluations[0],
    });
  };
}


export function editComment(id, name) {
  return async function (dispatch) {
    const response = await axios.put(`/comment/${id}`, name);
    dispatch({ type: "EDIT_COMMENT", data: response.data });
  };
}

export function deleteComment(idComment) {
  return async function (dispatch) {
    const response = await axios.delete(`/comment/${idComment}`);
    dispatch({ type: "DELETE_COMMENT" });
  };
}
