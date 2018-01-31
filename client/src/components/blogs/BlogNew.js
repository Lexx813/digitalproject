import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link }from 'react-router-dom';
import  { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {postBlog} from '../../actions';




class BlogNew extends Component{
  renderField(field){
  return <div className="form__group">
      <label className="form__label">{field.label}</label>
      <input className="form__input" type="text" {...field.input} />
      {field.meta.touched ? field.meta.error : ''}
    </div>;
  }
 renderTextArea(field){
  return <div className="form__group">
      <label className="form__label">Content</label>
      <div >
        <textarea className="form__input" {...field.input} rows="10" cols="68" />
        {field.meta.touched ? field.meta.error : ""}
      </div>
    </div>;
 }

  onSubmit(values, history) {
  
   
  this.props.postBlog(values);
 this.props.history.push("/blog");
  }

  render(){

    const { handleSubmit } = this.props;
    return(
      <div className="blogpost">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="blogpost__form form">
        <Field
          label="Name"
          name="name"
          component={this.renderField}
         />
        <Field
          label="Title"
          name="title"
          component={this.renderField}
         />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
         />
        <Field
          label="Image"
          name="image"
          component={this.renderField}
         />
        <Field
          label="Blog content"
          name="body"
          component={this.renderTextArea}
         />
         <button type="submit" className="btn blogpost__left btn--white">
         Submit
         </button>
         <Link to="/dashboard" className="btn blogpost__right btn--primary"> 
         Cancel
         </Link>
      </form>
      </div>
    );
  }
}

function validate(values) {
 const errors = {};
      if (!values.name){
      errors.name ="Enter a name"
}
      if (!values.title){
      errors.title ="Enter a title"
}
      if (!values.description){
      errors.description ="Enter a decription"
}
      if (!values.image){
      errors.image ="submit an image url address"
}
      if (!values.body){
      errors.body ="please enter content for blog"
}


   return errors;
}

export default reduxForm({
  validate,
  form:'BlogNewForm'
})(
 connect(null,{ postBlog })(withRouter(BlogNew))
);