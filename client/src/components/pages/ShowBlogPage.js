import React, {Component} from 'react';
import axios from 'axios';



const URL_BLOG = '/api/blogs/'

class ShowBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`${URL_BLOG}?id=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({data: json})
            })
    }




    render() {
        return (
            <div className="blog">
     
            </div>
        )
    }

}




export default ShowBlogPage;