import { useNavigate } from "react-router-dom";
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
    console.log("response: ", response);
    dispatch(loginSuccess(response.data));
 
  } catch (error) {
    console.log(error);
    dispatch(loginFailure(error));
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

//UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const response = await userRequest.put("/products/" + id, product);
    console.log(response);
    dispatch(updateProductSuccess({ id, product }));
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
    dispatch(deleteUserFailure(id));
  }
};

//ADD USER
export const addUser = async (user, dispatch) => {
  console.log(user);
  dispatch(addUserStart());
  try {
    const response = await userRequest.post(`/users/`, user);

    dispatch(addUserSuccess(response.data));
  } catch (error) {
    dispatch(addUserFailure());
    console.log("error: ", error);
  }
};

//UPDATE USER
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const response = await userRequest.put("/users/" + id, user);
    console.log(response);
    dispatch(updateUserSuccess({ id, user }));
  } catch (error) {
    dispatch(updateUserFailure());
  }
};
