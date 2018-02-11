import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import user from "./user_reducer";
import surveysReducer from './surveysReducer';
import blogsReducer from './blogsReducer';




export default combineReducers({user: user, form: reduxForm, surveys: surveysReducer,blogs:blogsReducer,

});
