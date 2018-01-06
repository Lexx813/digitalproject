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
    <div className="container" key={blogs._id}>
    <h2>{blogs.title}</h2>
    <p>{blogs.body}</p>
    <img src={blogs.image} alt="test"/>
    </div>
    
  )
})
}


  render() {
    return (
      <div>
       {this.renderBlogs()}
      </div>
    );
  }
}

function mapStateToProps({blogs}) {
  return {blogs};
}

export default connect(mapStateToProps, {fetchBlogs})(BLogList);
