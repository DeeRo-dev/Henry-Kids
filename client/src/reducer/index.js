const initialState = {
  allClasses: [],
  classes: [],
  user: [],
  classById: [],
  allClassTeacher: [],
  allClassTeacher2: [],
  favorites: [],
  category: [],
  categoryAll: [],
  solicitudes:[],
  usuarios:[],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLASSES":
      return {
        ...state,
        allClasses: action.data,
        classes: action.data,
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

    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

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
      };

    case "REMOVE_FAVORITE":
       return {
        ...state,
         favorites: state.favorites?.filter(
          (c) => c.id !== action.data
         )
       };
   case "GET_SOLICITUDES":
      return{
       ...state,
       solicitudes:action.data
       };
       case "SET_SOLICITUD":
      return{
       ...state
       };
       case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };

   default:
      return state;
  }
}
