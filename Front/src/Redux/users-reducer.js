const SET_USERS = 'SET_USER_PROFILE';
const SET_USERSID = 'SET_USERSID';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users:[],
    userId: 30,
};

const usersReducer = (state = initialState ,action) => {
    switch(action.type){
        case SET_USERS:{
            return{
                ...state,
                users:action.profile,
            }
        }
        case SET_USERSID:{
            return{
                ...state,
                userId:action.profile,
            }
        }
        case FOLLOW:{
            return{
                ...state,
                users:state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users:state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        }
        default:
            return state;
    }
}

export const setUsers = (profile) => ({type: SET_USERS, profile})

export const setUsersID = (profile) => ({type: SET_USERSID, profile})

export const follow = (userID) => ({type: FOLLOW, userID})

export const unfollow = (userID) => ({type: UNFOLLOW, userID})


export default usersReducer;