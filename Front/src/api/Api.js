import axios from 'axios';
import GetCookie from '../hook/getCookie';

const Cookie = GetCookie("usrin");
const token = Cookie['token'];


const instance = axios.create({
    baseURL:'http://apeiron-test.kz/',
    "token": "Bearer" + token,
})

export const postLogin = ({json}) => {
    return instance.post(`auth/login`,json).
    then(response => response.data);
}
