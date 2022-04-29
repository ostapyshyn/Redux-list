import * as actions from './actionTypes';

export const readPost = (post) => ({
  type: actions.READ_POST,
  payload: post,
});

export const addPost = (post) => ({
  type: actions.ADD_POST,
  payload: post,
});

export const removePost = (post) => ({
  type: actions.REMOVE_POST,
  payload: post,
});

export const updatePost = (post) => ({
  type: actions.UPDATE_POST,
  payload: post,
});
