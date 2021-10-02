import {IUserLogin} from "../../utils/TypeScript";
import {AUTH, IAuthType} from "../types/authType";
import {Dispatch} from "redux";
import {postAPI} from "../../utils/FetchData";

export const login = (userLogin: IUserLogin) => async (dispatch: Dispatch<IAuthType>) => {
  try {
    const res = await postAPI('login', userLogin)
    console.log(res)
    dispatch({
      type: AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user
      }
    })
  } catch (e: any) {
    console.log(e.response.data.msg)
  }

}