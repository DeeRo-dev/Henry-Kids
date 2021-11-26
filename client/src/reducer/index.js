
const initialState ={
    allClasses:[],
}


export default function rootReducer(state= initialState, action){
    
    switch(action.type){
        case "GET_ALL_CLASSES":
            return {
                ...state,
                allClasses: action.data
            }
     
        default: return state;
    }   
}