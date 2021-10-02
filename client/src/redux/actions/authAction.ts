import {IUserLogin} from "../../utils/TypeScript";
import {AUTH, IAuthType} from "../types/authType";
import {Dispatch} from "redux";
import {postAPI} from "../../utils/FetchData";
import {ALERT, IAlertType} from "../types/alertTye";

export const login = (userLogin: IUserLogin) => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  try {
    dispatch({
      type: ALERT,
      payload: {
        loading: true
      }
    })

    const res = await postAPI('login', userLogin)

    dispatch({
      type: AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user
      }
    })

    dispatch({
      type: ALERT,
      payload: {
        success: 'Login success!'
      }
    })
  } catch (e: any) {
    dispatch({
      type: ALERT,
      payload: {
        errors: e.response.data.msg
      }
    })
  }

}