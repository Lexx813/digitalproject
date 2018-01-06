import axios from 'axios';
import {FETCH_USER, FETCH_SURVEYS, FETCH_BLOGS} from './types';




/////////////AUTH ACTIONS
export const fetchUser = () => async dispatch => {
 const res = await axios.get('/api/current_user');

 dispatch({type: FETCH_USER, payload: res.data});
};

export const handleToken = token => async dispatch => {
 const res = await axios.post('/api/stripe', token);

 dispatch({type: FETCH_USER, payload: res.data});
};



////////////////////SURVEYS ACTIONS

export const submitSurvey = (values, history) => async dispatch => {
 const res = await axios.post('/api/surveys', values);

 history.push('/surveys');
 dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => async dispatch => {
 const res = await axios.get('/api/surveys');

 dispatch({type: FETCH_SURVEYS, payload: res.data});
};


///////////////////////////////////////////
////////BLOGS ACTIONS
///////////////////////////////////////////

export const submitBlog = (values, history) => async dispatch => {
  const res = await axios.post('/api/blogs', values);

  history.push('/blogs');
  dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchBlogs = () => async dispatch => {
  const res = await axios.get('/api/blogs');
console.log(fetchBlogs);
  dispatch({type: FETCH_BLOGS, payload: res.data});
};
