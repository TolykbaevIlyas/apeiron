import {combineReducers, legacy_createStore as createStore} from "redux"
import AuthReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import profileReducer from "./profile-reducer";
import globalReducer from "./global-reducer";
import usersReducer from "./users-reducer";
import chatReducer from "./chat-reducer";
import homeReducer from "./home-reducer";
import headerReducer from "./header-ruducer";


let reducers = combineReducers({
    PostsData: postsReducer,
    AuthData: AuthReducer,
    ProfileData: profileReducer,
    GlobalData: globalReducer,
    UsersData: usersReducer,
    ChatData: chatReducer,
    HomeData: homeReducer,
    HeaderData: headerReducer,
});

let store = createStore(reducers);

export default store;