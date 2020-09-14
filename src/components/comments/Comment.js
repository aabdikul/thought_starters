import React, { Component } from 'react';

class Comment extends Component {

	componentDidMount() {
		this.props.postComment(this.props.comment)
	}

	render() {

		const {comment} = this.props

		return (
			<div>
			{comment.text}
			</div>
		)
	}
}

export default Comment