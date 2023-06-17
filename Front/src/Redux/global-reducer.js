const ADD_USER = 'ADD_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    Users:[
       
        ],
    newPostText: "",
    profile: null,
    isFetching: false
};

const globalReducer = (state = initialState ,action) => {
    switch(action.type){
        case ADD_USER:{
            let newPost = {
                
            }
            return{
                ...state,
                Users:[...state.Users,newPost],
                newPostText:"",
            }
        }
        case SET_USERS:{
            return{
                ...state,
                Users:action.posts,
            }
        }
        default:
            return state;
    }
}

export const addUsers = () => ({type: ADD_USER})

export const setUsers = (posts) => ({type: SET_USERS, posts})

export default globalReducer;