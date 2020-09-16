import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes, fetchComments } from '../actions/blogActions'
import Dishes from '../components/dishes/Dishes'
import './DishesContainer.css'


class DishesContainer extends Component {

	componentDidMount() {
		this.props.fetchDishes()
		this.props.fetchComments()
	}

	render() {

		return (
			<div className="dish-container">
			<h1>Thoughts and Recipes</h1>
			<Dishes dishes={this.props.dishes} comments={this.props.comments} delete={this.props.delete}/>
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
		delete: (post_id) => dispatch({type: "DELETE_POST", post_id})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesContainer)