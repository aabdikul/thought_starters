import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes, fetchComments } from '../actions/blogActions'
import Dishes from '../components/dishes/Dishes'


class DishesContainer extends Component {

	componentDidMount() {
		this.props.fetchDishes()
		this.props.fetchComments()
	}

	render() {
		return (
			<div className="dish-container">
			<h2>Dish Container</h2>
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
		fetchComments: () => dispatch(fetchComments())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesContainer)