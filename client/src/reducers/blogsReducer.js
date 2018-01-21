import {
  FETCH_BLOGS,
  POST_BLOG,
  REMOVE_BLOG,
  EDIT_BLOG
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BLOGS:
      return action.payload;
    default:
      return state;
    case POST_BLOG:
      return [...state, action.blogs];
    case REMOVE_BLOG:
      return state.filter(({ _id }) => _id !== action._id);
    case EDIT_BLOG:
      return state.map(blogs => {
        if (blogs._id === action._id) {
          return { ...blogs, ...action.updates };
        } else {
          return blogs;
        }
      });
  }
}
