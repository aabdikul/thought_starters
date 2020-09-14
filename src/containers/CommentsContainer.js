import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'
import { postComment, fetchComments } from '../actions/blogActions'

class CommentsContainer extends Component {

	componentDidMount() {
		this.props.fetchComments()
	}

	render() {
		console.log(this.props.comments)
		return (
			<div>
			<CommentInput addComment={this.props.addComment} dishId={this.props.dishId}/>
			<Comments comments={this.props.comments} dishId={this.props.dishId} postComment={this.props.postComment}/>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		comments: state.comments
	}
}

const mapDispatchToProps = dispatch => ({
	addComment: (comment, dishId) => dispatch({type: 'ADD_COMMENT', comment, dishId}),
	postComment: (comment) => dispatch(postComment(comment)),
	fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)