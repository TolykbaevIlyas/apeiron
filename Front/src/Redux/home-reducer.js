const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_POSTS = 'SET_POSTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    Posts:[
       
        ],
    newPostText: "",
    profile: null,
    isFetching: false
};

const homeReducer = (state = initialState ,action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                
            }
            return{
                ...state,
                Posts:[...state.Posts,newPost],
                newPostText:"",
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText,
            }
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile,
            }
        }
        case SET_POSTS:{
            return{
                ...state,
                Posts:action.posts,
            }
        }
        case TOGGLE_IS_FETCHING:{
            return{...state,isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const addHomePost = () => ({type: ADD_POST})

export const setHomeUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setHomePosts = (posts) => ({type: SET_POSTS, posts})
  
export  const updateNewHomeText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const toggleHomeIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default homeReducer;