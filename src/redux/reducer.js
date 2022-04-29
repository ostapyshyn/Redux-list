import * as types from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  posts: [{ id: 1, post: 'Test Post 123', completed: false }],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POST:
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, post: action.payload.updatedPost };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    case types.REMOVE_POST:
      const fiterPost = state.posts.filter((post) => post.id !== action.payload.id);
      return {
        ...state,
        posts: fiterPost,
      };
    case types.ADD_POST:
      const newPost = {
        id: uuidv4(),
        post: action.payload,
        completed: false,
      };
      const addedPosts = [...state.posts, newPost];
      return {
        ...state,
        posts: addedPosts,
      };
    case types.READ_POST:
      const toggleTodos = state.posts.map((post) => (post.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : post));
      return {
        ...state,
        posts: toggleTodos,
      };
    default:
      return state;
  }
};

export default postsReducer;
