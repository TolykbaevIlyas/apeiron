import { useLocation, Navigate } from "react-router";
import axios from 'axios';
import GetCookie from "../hook/getCookie";
import { useAuth } from "../hook/useAuth";
import store from "../Redux/redux-store";

const RequireAuth = ({children}) =>{
    const location = useLocation();
    const {user} = useAuth();
    const copyUser= {...user};
    const AuthAccess = copyUser['UserAccess'];
    const Cookie = JSON.parse(GetCookie('usrin'));
    const CookieAccess = Cookie['UserAccess'];
    let ServerAccess = {};

    // async function SendInformationOnServerT(){
    //     await  axios.get(`http://apeiron-test.kz/userAccess`,{
    //         headers:{
    //             Authorization: 'Bearer 7b1e42f0ca015753622fc094e4944fd5'
    //         }
    //     }).then(response => {
    //             console.log(response);
    //             ServerAccess = response.data.UserAccess;
    //         })
    //     console.log(ServerAccess);
    //     if((ServerAccess)) {
    //         return <Navigate to='/login' state={{from:location}}></Navigate>
    //     }
    //     return children;

    // }

    // console.log(CookieAccess);
    // console.log(!AuthAccess);

    // сравнение по доступу из куки с помощью переменной CookieAccess 
    // на данный момент работает плохо

    if(!AuthAccess) {
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children;

    // SendInformationOnServerT();
    // console.log(store.getState());

    // console.log(user)



    // console.log(copyUser['UserAccess']);
    // console.log(Cookie['UserAccess']);
    // console.log(!user);
   
    
}

export {RequireAuth};