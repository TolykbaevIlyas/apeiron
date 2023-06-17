
const SET_USER = 'SET_USER_PROFILE';

let initialState = {
    profile:[]
};

const profileReducer = (state = initialState ,action) => {
    switch(action.type){
        case SET_USER:{
            return{
                ...state,
                profile:action.profile,
            }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER, profile})

export default profileReducer;