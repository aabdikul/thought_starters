import React, { Component } from 'react';

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
		event.preventDefault()
		this.props.addComment(this.state.comment)
	}

	render() {
		return (
			<div>
				<h3>Add Comment</h3>
			<br/>
				<form className="create-comment" onSubmit={this.handleSubmit}>
					<input type="text" name="comment" onChange={this.handleChange} value={this.state.comment}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}

}

export default CommentInput