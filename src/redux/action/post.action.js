import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_COMMENT,
  DELETE_POST,
  UPDATE_COMMENT,
  UPDATE_POST,
  COMMENT_REPLY,
} from "../constant/const";

export const addPost = (postdata) => {
  return { type: ADD_POST, payload: postdata };
};
export const deletePost = (postdata) => {
  return { type: DELETE_POST, payload: postdata };
};
export const updatePost = (postdata) => {
  return { type: UPDATE_POST, payload: postdata };
};

export const addComment = (commentdata) => {
  return { type: ADD_COMMENT, payload: commentdata };
};
export const updateComment = (commentdata) => {
  return { type: UPDATE_COMMENT, payload: commentdata };
};
export const deleteComment = (commentdata) => {
  return { type: DELETE_COMMENT, payload: commentdata };
};
export const addReply = (replydata) => {
  return { type: COMMENT_REPLY, payload: replydata };
};
