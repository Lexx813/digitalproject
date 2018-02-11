import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_BLOGS,
  REMOVE_BLOG,
  EDIT_BLOG
} from "./types";

///USER

export function loginUser({ email, password }) {
  const request = axios
    .post("/api/login", { email, password })
    .then(response => response.data);

  return {
    type: "USER_LOGIN",
    payload: request
  };
}

export function auth() {
  const request = axios.get("/api/auth").then(response => response.data);

  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function getUsers() {
  const request = axios.get(`/api/users`).then(response => response.data);

  return {
    type: "GET_USER",
    payload: request
  };
}

export function userRegister(user, userList) {
  const request = axios.post(`/api/register`, user);

  return dispatch => {
    request.then(({ data }) => {
      let users = data.success ? [...userList, data.user] : userList;
      let response = {
        success: data.success,
        users
      };

      dispatch({
        type: "USER_REGISTER",
        payload: response
      });
    });
  };
}

/////////////AUTH ACTIONS
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/users");

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

  history.push("/dashboard");
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
