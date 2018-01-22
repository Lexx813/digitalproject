import {
  FETCH_BLOGS,
  POST_BLOG

} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case POST_BLOG:
      return [...state, action.blogs];
    case FETCH_BLOGS:
      return action.payload;
    default:
      return state;
  }
}
