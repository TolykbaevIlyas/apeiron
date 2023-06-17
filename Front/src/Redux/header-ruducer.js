const SET_PATH = 'SET_PATH';

let initialState = {
    path:"",
};

const headerReducer = (state = initialState ,action) => {
    switch(action.type){
        case SET_PATH:{
            return{
                ...state,
                path:action.path,
            }
        }
        default:
            return state;
    }
}

export const setPath = (path) => ({type: SET_PATH, path})


export default headerReducer;