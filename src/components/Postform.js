import React, { Component } from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {newPost} from '../actions/postActions';

class Postform extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    formhandler = (e) => {
        e.preventDefault();
        var postData = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newPost(postData);
    }

    onChange = e => {        
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return (
        <div>
            Post Form
            <form onSubmit={this.formhandler}>
                <div>
                    <label>Title</label>
                    <br/>
                    <input type="text" onChange={this.onChange} value={this.state.title} name="title"/>
                </div>
                <div>
                    <label>Body</label>
                    <br/>
                    <textarea onChange={this.onChange} value={this.state.body} name="body"/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

Postform.propTypes = {
    newPost: propTypes.func.isRequired
};

const mapStoreToProp = state => ({
    post: state.posts.item
});

export default connect(mapStoreToProp, {newPost})(Postform);
