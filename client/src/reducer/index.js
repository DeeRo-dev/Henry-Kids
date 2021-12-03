const initialState = {
  allClasses: [],
  classes: [],
  user: [],
  classById: [],
  allClassTeacher: [],
  favorites: [],
  category: [],
  
  
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLASSES":
      return {
        ...state,
        allClasses: action.data,
        classes: action.data
      };

    case "POST_USER":
      return {
        ...state,
      };
<<<<<<< HEAD

    case "SEARCH_CLASS":
      return {
        ...state,
        allClasses: action.payload
      };
=======
      case "EDIT_USER":
        return{
          ...state,
        };
        case "GET_USER":
          return{
            ...state,
            user: action.payload
          }
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
>>>>>>> funcionalidad-buscador

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
        allClassTeacher: action.data,
      };

    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.data,
      };

    case "MODIFY_CLASS":
      return {
        ...state,
      };

    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload
      };

    case "DIFFICULTY_FILTER":
      return {
        ...state,
        allClasses: action.data
      };

      case 'DELETE_CLASSES':
        return{ 
          ...state,
        }

        case 'SET_FAVORITE':
        return{ 
          ...state,
        }
      
    default:
      return state;
  }
}
