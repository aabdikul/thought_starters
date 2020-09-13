import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments'

class CommentsContainer extends Component {

	render() {
		return (
			<div>
			<CommentInput addComment={this.props.addComment}/>
			<Comments comments={this.props.comments}/>
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
	addComment: comment => dispatch({type: 'ADD_COMMENT', comment})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)