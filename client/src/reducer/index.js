
const initialState ={
    allClasses:[],
    classById: []
}


export default function rootReducer(state= initialState, action){
    
    switch(action.type){
        case "GET_ALL_CLASSES":
            return {
                ...state,
                allClasses: action.data
            }
        case "GET_CLASS_BY_ID":
            return {
                ...state,
                classById: action.data
            }    

     
        default: return state;
    }   
}