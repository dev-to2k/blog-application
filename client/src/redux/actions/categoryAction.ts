import { Dispatch } from "redux";
import { ALERT, IAlertType } from "../types/alertTye";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  ICategoryType,
  UPDATE_CATEGORY,
} from "../types/categoryType";
import { deleteAPI, getAPI, patchAPI, postAPI } from "../../utils/FetchData";
import { ICategory } from "../../utils/TypeScript";

export const createCategory =
  (name: string, token: string) =>
  async (dispatch: Dispatch<IAlertType | ICategoryType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await postAPI("category", { name }, token);

      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data.newCategory,
      });

      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };

export const getCategories =
  () => async (dispatch: Dispatch<IAlertType | ICategoryType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await getAPI("category");

      dispatch({
        type: GET_CATEGORIES,
        payload: res.data.categories,
      });

      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };

export const updateCategory =
  (data: ICategory, token: string) =>
  async (dispatch: Dispatch<IAlertType | ICategoryType>) => {
    try {
      dispatch({ type: UPDATE_CATEGORY, payload: data });
      await patchAPI(`category/${data._id}`, { name: data.name }, token);
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };

export const deleteCategory =
  (id: string, token: string) =>
  async (dispatch: Dispatch<IAlertType | ICategoryType>) => {
    try {
      dispatch({ type: DELETE_CATEGORY, payload: id });
      await deleteAPI(`category/${id}`, token);
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
    }
  };
