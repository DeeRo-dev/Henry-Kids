const initialState = {
  allClasses: [],
  user: [],
  classById: [],
  allClassTeacher:[],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLASSES":
      return {
        ...state,
        allClasses: action.data,
      };
    case "POST_USER":
      return {
        ...state,
      };
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

    default:
      return state;
  }
}
