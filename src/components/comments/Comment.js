import React, { Component } from 'react';

class Comment extends Component {

	render() {

		const {comment} = this.props

		return (
			<div>
			{comment.text}
			<button>X</button>
			</div>
		)
	}
}

export default Comment