import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";

class BLogList extends Component {
  componentWillMount() {
    this.props.fetchBlogs();
  
  }


  renderBlogs() {
    return this.props.blogs.map(blogs => {
      return (
        <div className="bloglist" key={blogs._id}>
          <h2 className="bloglist__title heading-secondary">{blogs.title}</h2>
          <img className="bloglist__img " src={blogs.image} alt="test" />
          <h3 className="bloglist__desc">{blogs.description}</h3>
          <Link to={`/blog/${blogs._id}`} className="btn-text bloglist__link">
            Read more &rarr;
          </Link>
        </div>
      );
    });
  }
  render() {
    return (
      <div className = "bloglist__container">
        <div className="row"> 
          <div >{this.renderBlogs()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default connect(mapStateToProps, { fetchBlogs })(BLogList);
