import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'

class CommentsContainer extends Component {

	render() {
		return (
			<div>
			<CommentInput addComment={this.props.addComment} dishId={this.props.dishId}/>
			<Comments comments={this.props.comments} dishId={this.props.dishId}/>
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
	addComment: (comment, dishId) => dispatch({type: 'ADD_COMMENT', comment, dishId})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)