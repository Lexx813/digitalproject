import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import blogsReducer from './blogsReducer';




export default combineReducers({auth: authReducer, form: reduxForm, surveys: surveysReducer,blogs:blogsReducer,

});
