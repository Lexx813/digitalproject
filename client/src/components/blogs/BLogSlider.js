import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogs} from '../../actions';
import Slider from 'react-slick';





const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

class BlogSlider extends Component{
componentDidMount(){
  this.props.fetchBlogs();
}

renderSlider(){
return this.props.blogs.map(blogs => {
  return(
            <Slider {...settings}>
         <div className="blog-slider">
              
              <img src={blogs.image} alt="slider"/>
              <h3 className="caption">{blogs.title}</h3>
         </div>
        </Slider>
  )
})
}
  render(){
    return(
    <div>
    {this.renderSlider()}
    </div>
    )
  }
}


function mapStateToProps({blogs}) {
  return {blogs};
}

export default connect(mapStateToProps, {fetchBlogs})(BlogSlider);






