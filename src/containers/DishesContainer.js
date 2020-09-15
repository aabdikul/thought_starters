import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes, fetchComments, postNewPost } from '../actions/blogActions'
import Dishes from '../components/dishes/Dishes'
import DishInput from '../components/dishes/DishInput'


class DishesContainer extends Component {

	componentDidMount() {
		this.props.fetchDishes()
		this.props.fetchComments()
	}

	render() {

		return (
			<div className="dish-container">
			<h1>Thoughts and Recipes</h1>
			<DishInput addPost={this.props.addPost} postNewPost={this.props.postNewPost}/>
			<Dishes dishes={this.props.dishes} comments={this.props.comments}/>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDishes: () => dispatch(fetchDishes()),
		fetchComments: () => dispatch(fetchComments()),
		postNewPost: (unique_id, name, image, ingredients, instructions) => dispatch(postNewPost(unique_id, name, image, ingredients, instructions)),
		addPost: (unique_id, name, image, ingredients, instructions) => dispatch({type: 'ADD_POST', unique_id, name, image, ingredients, instructions})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesContainer)