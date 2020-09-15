import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'
import { postComment, fetchComments } from '../actions/blogActions'

class CommentsContainer extends Component {

	render() {
		
		return (
			<div>
			<CommentInput addComment={this.props.addComment} dishId={this.props.dishId} postComment={this.props.postComment}/>
			<Comments comments={this.props.comments} dishId={this.props.dishId} postComment={this.props.postComment}/>
			</div>
		)
	}

}


const mapDispatchToProps = dispatch => ({
	addComment: (comment, dishId, identifier) => dispatch({type: 'ADD_COMMENT', comment, dishId, identifier}),
	postComment: (comment, dishId, identifier) => dispatch(postComment(comment, dishId, identifier))
})

export default connect(null, mapDispatchToProps)(CommentsContainer)