import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogs} from '../../actions';

class BLogList extends Component {
 componentWillMount(){
   this.props.fetchBlogs();

 }

renderBlogs(){
return this.props.blogs.map(blogs => {
  return(
    <div className="bloglist" key={blogs._id}>
      <img className="bloglist__img" src={blogs.image} alt="test"/>
      <h2 className="bloglist__title">{blogs.title}</h2>
      <p className="bloglist__body">{blogs.body}</p>
       <a href="/blogs/_id" className="btn-text">Learn more &rarr;</a>
    </div> 
  )
})
}
  render() {
    return (
      <div className="row">
         <div className="col-2-of-4"> 
         {this.props.blogs.image}
         </div>
         <div className="col-2-of-4"> 
           {this.renderBlogs()}
         </div>
      </div>
    );
  }
}

function mapStateToProps({blogs}) {
  return {blogs};
}

export default connect(mapStateToProps, {fetchBlogs})(BLogList);
