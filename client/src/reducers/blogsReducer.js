import {FETCH_BLOGS , ADD_BLOG, REMOVE_BLOG, EDIT_BLOG} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
    case FETCH_BLOGS:
      return action.payload;
    default:
      return state;
    case ADD_BLOG:
      return [...state, action.blog];
    case REMOVE_BLOG :
      return state.filter(({ _id }) => _id !== action._id);
    case EDIT_BLOG :
      return state.map(blog => {
        if (blog._id === action._id) {
          return { ...blog, ...action.updates };
        } else {
          return blog;
        }
      });
  }
}