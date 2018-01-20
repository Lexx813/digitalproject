import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";

class ShowBlogPage extends Component {
  componentWillMount() {
    if (!this.props.blogs.length) {
      this.props.fetchBlogs();
    }
  }
  renderBlog = () => {
    const blog = this.props.blogs.find(
      ({ _id }) => _id === this.props.match.params.id
    );
    if (!blog) return;

    return (
      <div key={blog._id}>
        <h2 className="heading-secondary">{blog.title}</h2>
        <h3 className="heading-primary--sub">{blog.description}</h3>
        <div className="">
          <img className="" src={blog.image} alt="" />
        </div>
        <div className="">
          <p className="paragraph">{blog.body}</p>
        </div>
      </div>
    );
  };

  render() {
    return <div className="blog">{this.props.blogs.length && this.renderBlog()}</div>;
  }
}

const mapStateToProps = ({ blogs }) => ({ blogs });

export default connect(mapStateToProps, {fetchBlogs})(ShowBlogPage);
