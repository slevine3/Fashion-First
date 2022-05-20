import { publicRequest, userRequest } from "../requestMethods";

import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserStart,
  getUserFailure,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from "./userRedux";

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
    // const response = await userRequest.delete(`/products/${id}`);

    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

//UPDATE PRODUCTS
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

//ADD PRODUCTS
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const response = await userRequest.post(`/products/`, product);

    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

//GET ALL PRODUCTS
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const response = await publicRequest.get("/users");
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure());
  }
};

// //DELETE USER
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const response = await userRequest.delete(`/users/${id}`);

    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};

//ADD PRODUCTS
export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    console.log("dispatch run");
    const response = await userRequest.post(`/users/`, user );
    console.log("response: ", response);
    dispatch(addUserSuccess(response.data));
  } catch (error) {
    dispatch(addUserFailure());
    console.log("error: ", error);
  }
};
