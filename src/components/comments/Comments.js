import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {

	render() {
		
		const comment = this.props.comments.map((comment) => {
			if (comment.post_id === this.props.dishId) {
				return <Comment key={comment.uuid} comment={comment}/>
			}
		})

		return (
			<div>
			Comments Component
			{comment}
			</div>
		)
	}
}

export default Comments