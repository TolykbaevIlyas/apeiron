import Cookies from "js-cookie";

const RemoveCookie = (cookiename) => {
     return Cookies.remove(cookiename);
};

export default RemoveCookie;