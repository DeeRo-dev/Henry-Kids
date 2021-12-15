const initialState = {
  allClasses: [],
  classes: [],
  user: [],
  classById: [],
  allClassTeacher: [],
  allClassTeacher2: [],
  favorites: [],
  // category: [],
  categoryAll: [],
  valoracion: [],
  valoracion2: [],
  solicitudes: [],
  userStudent: [],
  userTeacher: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLASSES":
      return {
        ...state,
        allClasses: action.data,
        classes: action.data,
      };
    case "SEND_COMMENT":
      return {
        ...state,
      };
    case "EDIT_COMMENT":
      return {
        ...state,
      };
    case "RESPONSE_COMMENT":
      return {
        ...state,
      };
    case "DELETE_COMMENT":
      return {
        ...state,
      };
    case "POST_USER":
      return {
        ...state,
      };
    case "EDIT_USER":
      return {
        ...state,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SEARCH_CLASS":
      if (action.dataLength === 1 || !action.payload.length) {
        return {
          ...state,
          allClasses: state.classes,
        };
      } else {
        return {
          ...state,
          allClasses: action.payload,
        };
      }

    case "CREATE_CLASS":
      return {
        ...state,
      };

    case "GET_CLASS_BY_ID":
      return {
        ...state,
        classById: action.data,
      };

    case "GET_ALL_CLASSES_TEACHER":
      return {
        ...state,
        allClassTeacher: action.data[0]?.classes,
        allClassTeacher2: action.data[0]?.classes,
      };

    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.data[0]?.classes,
      };
    case "FILTER_BY_CATEGORY":
      if (action.payload === "all") {
        return {
          ...state,
          allClasses: state.classes,
        };
      } else {
        return {
          ...state,
          allClasses: action.payload,
        };
      }
    
    case "FILTER_BY_CATEGORY_AND_DIFFICULTY":
      return {
        ...state,
        allClasses: action.payload,
      };
    case "FILTER_BY_CATEGORY_TEACHER":
      const allClassesTeacher = state.allClassTeacher2;
      switch (action.payload) {
        case "1":
          const result = allClassesTeacher.filter(
            (e) => e.categories[0].name === "JavaScript"
          );
          return {
            ...state,
            allClassTeacher: result,
          };
        case "2":
          const result2 = allClassesTeacher.filter(
            (e) => e.categories[0].name === "React"
          );
          return {
            ...state,
            allClassTeacher: result2,
          };
        case "3":
          const result3 = allClassesTeacher.filter(
            (e) => e.categories[0].name === "HTML"
          );
          return {
            ...state,
            allClassTeacher: result3,
          };
        case "all":
          return {
            ...state,
            allClassTeacher: state.allClassTeacher2,
          };
        default:
          return state;
      }

    case "FILTER_BY_DIFFICULTY":
      if (action.payload === "all") {
        return {
          ...state,
          allClasses: state.classes,
        };
      } else {
        return {
          ...state,
          allClasses: action.payload,
        };
      }

    case "MODIFY_CLASS":
      return {
        ...state,
      };

    // case "GET_CATEGORY":
    //   return {
    //     ...state,
    //     category: action.payload,
    //   };

    case "GET_CATEGORY_ALL":
      return {
        ...state,
        categoryAll: action.payload,
      };

    case "DIFFICULTY_FILTER":
      return {
        ...state,
        allClasses: action.data,
      };

    case "SET_FAVORITE":
      return {
        ...state,
      };
    case "DELETE_CLASSES":
      return {
        ...state,
        allClassTeacher: state.allClassTeacher.filter(
          (c) => c.id !== action.data
        ),
        allClasses: state.allClasses.filter((c) => c.id !== action.data),
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites?.filter((c) => c.id !== action.data),
      };
    case "GET_SOLICITUDES":
      return {
        ...state,
        solicitudes: action.data,
      };
    case "SET_SOLICITUD":
      return {
        ...state,
      };

    case "GET_USER_ALUMNO":
      return {
        ...state,
        userStudent: action.data,
      };
    case "GET_USER_TEACHER":
      return {
        ...state,
        userTeacher: action.data,
      };
    case "ACCEPT_TEACHER":
      console.log(action.data);
      return {
        ...state,
        solicitudes: state.solicitudes.filter((c) => c.id !== action.data),
      };
    case "RECHAZAR_TEACHER":
      console.log(action.data);
      return {
        ...state,
        solicitudes: state.solicitudes.filter(
          (soli) => soli.id !== action.data
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        userTeacher: state.userTeacher.filter(
          (user) => user.id !== action.data
        ),
        userStudent: state.userStudent.filter(
          (user) => user.id !== action.data
        ),
        user: state.user.filter((user) => user.id !== action.data),
      };

    case "GET_VALORACION":
      return {
        ...state,
        valoracion: action.payload,
      };

    case "GET_CLASEVAL":
      return {
        ...state,
        valoracion2: action.payload,
      };
    case "NEW_CATEGORY":
      return {
        ...state,
      };

    default:
      return state;
  }
}
