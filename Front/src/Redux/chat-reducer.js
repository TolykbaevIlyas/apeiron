const SET_CHATS = 'SET_CHATS';
const SET_USERS_CHATS = 'SET_USERS_CHATS';
const SET_USERS_MESSAGES = 'SET_USERS_MESSAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    chats:[],
    usersInChat: [],
    usersMessages:[],
    isFetching: false
};

const chatReducer = (state = initialState ,action) => {
    switch(action.type){
        case SET_CHATS:{
            return{
                ...state,
                chats:action.profile,
            }
        }
        case SET_USERS_CHATS:{
            return{
                ...state,
                usersInChat:action.profile,
                
            }
        }
        case SET_USERS_MESSAGES:{
            return{
                ...state,
                usersMessages:action.profile,
            }
        }
        case TOGGLE_IS_FETCHING:{
            return{...state,isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const setChats = (profile) => ({type: SET_CHATS, profile})

export const setUsersChats = (profile) => ({type: SET_USERS_CHATS, profile})

export const setUsersMessages= (profile) => ({type: SET_USERS_MESSAGES, profile})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default chatReducer;