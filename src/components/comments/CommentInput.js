import React, { Component } from 'react';
import uuid from 'uuid';
import CommentInputStyling from './CommentInput.css'

class CommentInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			comment: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		let identifier = uuid();
		this.props.addComment(this.state.comment, this.props.dishId, identifier);
		this.props.postComment(this.state.comment, this.props.dishId, identifier);
	}

	render() {

		return (
			<div className="box">
				<h3>Add Comment</h3>
				<form className="create-comment" onSubmit={this.handleSubmit}>
					<input type="text" className="input-field" name="comment" onChange={this.handleChange} value={this.state.comment}/>
					<br/>
					<input type="submit" value="Submit" className="submit-button"/>
				</form>
			</div>
		)
	}

}

export default CommentInput