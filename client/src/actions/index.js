import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_BLOGS,
  REMOVE_BLOG,
  EDIT_BLOG
} from "./types";

/////////////AUTH ACTIONS
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

////////STRIPE API
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

////////////////////SURVEYS ACTIONS

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

///////////////////////////////////////////
////////BLOGS ACTIONS
///////////////////////////////////////////

export const postBlog = (values, history) => async dispatch => {
  const res = await axios.post("/api/blog", values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBlogs = () => async (dispatch, getState) => {

  const res = await axios.get("/api/blog");
  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const editBlog = () => async dispatch => {
  const res = await axios.put("/api/blog/:_id");
  dispatch({ type: EDIT_BLOG, payload: res.data });
};

export const removeBlog = () => async dispatch => {
  const res = await axios.delete("/api/blog/:_id");
  dispatch({ type: REMOVE_BLOG, payload: res.data });
};
