import {IUserLogin, IUserRegister} from "../../utils/TypeScript";
import {AUTH, IAuthType} from "../types/authType";
import {Dispatch} from "redux";
import {getAPI, postAPI} from "../../utils/FetchData";
import {ALERT, IAlertType} from "../types/alertTye";
import {validRegister} from "../../utils/Valid";

export const login =
  (userLogin: IUserLogin) =>
    async (dispatch: Dispatch<IAuthType | IAlertType>) => {
      try {
        dispatch({
          type: ALERT,
          payload: {
            loading: true,
          },
        });

        const res = await postAPI("login", userLogin);

        dispatch({type: AUTH, payload: res.data});

        dispatch({
          type: ALERT,
          payload: {
            success: "Login success!",
          },
        });

        localStorage.setItem('logged', 'to2k-channel')
      } catch (e: any) {
        dispatch({
          type: ALERT,
          payload: {
            errors: e.response.data.msg,
          },
        });
      }
    };

export const register =
  (userRegister: IUserRegister) =>
    async (dispatch: Dispatch<IAuthType | IAlertType>) => {
      const check = validRegister(userRegister);

      if (check.errLength > 0)
        return dispatch({type: ALERT, payload: {errors: check.errMsg}});

      try {
        dispatch({type: ALERT, payload: {loading: true}});

        const res = await postAPI("register", userRegister);

        dispatch({type: ALERT, payload: {success: res.data.msg}});
      } catch (err: any) {
        dispatch({type: ALERT, payload: {errors: err.response.data.msg}});
      }
    };

export const refreshToken =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const logged = localStorage.getItem("logged");
    if (logged !== "to2k-channel") return;

    try {
      dispatch({type: ALERT, payload: {loading: true}});

      const res = await getAPI("refresh_token");

      dispatch({type: AUTH, payload: res.data});

      dispatch({type: ALERT, payload: {}});
    } catch (err: any) {
      dispatch({type: ALERT, payload: {errors: err.response.data.msg}});
    }
  };

export const logout =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      localStorage.removeItem("logged");
      await getAPI("logout");
      window.location.href = "/";
    } catch (err: any) {
      dispatch({type: ALERT, payload: {errors: err.response.data.msg}});
    }
  };
