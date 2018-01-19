import React, {Component} from 'react';
import axios from 'axios';



const URL_BLOG = '/api/blogs/:_id/'

class ShowBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`${URL_BLOG}?name=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({data: json})
            })
    }

    renderBlog(blog) {
        return this.props.blog.map((blog) => {
            return (
                <div key={blog.name} className="blog-wrapper">
                  
                    <h4>{blog.name}</h4>
         
                </div>
            )
        })
    }


    render() {
        return (
            <div className="blog">
                {this.renderBlog(this.state)}
            </div>
        )
    }

}




export default ShowBlogPage;