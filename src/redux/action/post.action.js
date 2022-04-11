import { ADD_POST, DELETE_POST, UPDATE_POST } from "../constant/const";

export const addPost = (postdata) => {
  return { type: ADD_POST, payload: postdata };
};
export const deletePost = (postdata) => {
  return { type: DELETE_POST, payload: postdata };
};
export const updatePost = (postdata) => {
  return { type: UPDATE_POST, payload: postdata };
};
