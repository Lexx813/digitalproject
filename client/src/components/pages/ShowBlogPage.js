import React, {Component} from 'react';
import axios from 'axios';



const URL_BLOG = '/api/blogs/'

class ShowBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [{
                _id:'',
                name:'',
                title:'',
                image:'',
                body:''
            }]
        }
    }

    componentDidMount() {
        axios.get(`${URL_BLOG}/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({data: json})
            })
    }




    render() {
        return (
            <div key={this.data._id} className="blog">
               {this.state.data}
            </div>
        )
    }

}




export default ShowBlogPage;