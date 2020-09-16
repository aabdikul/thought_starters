import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {

	render() {

		const {comment} = this.props

		return (
			<div className="comments">
			<div className="comment-text"><li>{comment.text}</li></div>
			</div>
		)
	}
}

export default Comment