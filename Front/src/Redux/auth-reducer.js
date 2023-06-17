const ADD_POST = 'ADD-POST';
const UPDATE_NEW_AUTH_TEXT = 'UPDATE_NEW_AUTH_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_NEW_PASS_TEXT = 'UPDATE_NEW_PASS_TEXT';
const UPDATE_NEW_TOKEN_TEXT = 'UPDATE_NEW_TOKEN_TEXT';
const UPDATE_NEW_USER_ACCESS = 'UPDATE_NEW_USER_ACCESS';
const UPDATE_NEW_USER_ID = 'UPDATE_NEW_USER_ID';

let initialState = {
    UserAcc:[
        {
            id: "",
            login: "", 
            password: "", 
            token: "", 
            UserAccess: false, 
        },
        ],
        newAuthText: "",
        newPassText: "",
        newTokenText: "",
        newUserAccess:"false",
        newId: ""
};

const AuthReducer = (state = initialState ,action) => {
    switch(action.type){
        case ADD_POST:{
            return{
                UserAcc:[{
                    login:state.newAuthText,
                    password:state.newPassText,
                    UserAccess: state.newUserAccess,
                    token: state.newTokenText,
                    id: state.newId
                }],
                newAuthText:"",
                newPassText:"",
                newTokenText:"",
                newUserAccess:"",
                newId:""
            }
        }
        case UPDATE_NEW_AUTH_TEXT:{
            return{
                ...state,
                newAuthText:action.newText,
            }
        }
        case UPDATE_NEW_PASS_TEXT:{
            return{
                ...state,
                newPassText: action.newText,
            }
        }
        case UPDATE_NEW_TOKEN_TEXT:{
            return{
                ...state,
                newTokenText: action.newText,
            }
        }
        case UPDATE_NEW_USER_ACCESS:{
            return{
                ...state,
                newUserAccess: action.newText,
            }
        }
        case UPDATE_NEW_USER_ID:{
            return{
                ...state,
                newId: action.newText,
            }
        }
        
        default:
            return state;
    }
}

export const addAuthActionCreater = () => ({type: ADD_POST})

export const setUsersssProfile = (profile) => ({type: SET_USER_PROFILE, profile})
  
export  const updateNewAuthActionCreater = (text) => ({type: UPDATE_NEW_AUTH_TEXT, newText: text})

export  const updateNewPassActionCreater = (text) => ({type: UPDATE_NEW_PASS_TEXT, newText: text})

export  const updateNewTokenActionCreater = (text) => ({type: UPDATE_NEW_TOKEN_TEXT, newText: text})

export  const updateNewUserAccessActionCreater = (text) => ({type: UPDATE_NEW_USER_ACCESS, newText: text})

export  const updateNewUserIdActionCreater = (text) => ({type: UPDATE_NEW_USER_ID, newText: text})

export default AuthReducer;