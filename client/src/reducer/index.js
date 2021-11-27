const initialState = {
  allClasses: [],
  user: [],
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

    default:
      return state;
  }
}
