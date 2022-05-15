import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from "./productRedux";
import {
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
  } from "./productRedux";

//LOGIN

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//GET ALL PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("/products");
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

//DELETE PRODUCTS
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
    //   const response = await userRequest.delete(`/products/${id}`);

      dispatch(deleteProductSuccess(id));
    } catch (error) {
      dispatch(deleteProductFailure());
    }
  };
  