import { reqLogin } from "@api/acl/login";
import { LOGIN, LOGOUT } from "../constants/login";
import { reqMobileLogin } from "@api/acl/oauth";
export const mobileLogin = (mobile, code) => {
  return (dispatch) => {
    return reqMobileLogin(mobile, code).then(({ token }) => {
      dispatch(loginSync(token));
      return token;
    });
  };
};
export const login = (username, password) => {
  return (dispatch) => {
    return reqLogin(username, password).then(({ token }) => {
      dispatch(loginSync(token));
      return token;
    });
  };
};
const loginSync = (token) => ({
  type: LOGIN,
  data: token,
});
export const logout = () => ({
  type: LOGOUT,
});
export const removeToken = () => {};
