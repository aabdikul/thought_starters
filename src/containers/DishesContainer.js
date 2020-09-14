import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes } from '../actions/blogActions'
import Dishes from '../components/dishes/Dishes'


class DishesContainer extends Component {

	componentDidMount() {
		this.props.fetchDishes()
	}

	render() {
		return (
			<div className="dish-container">
			<h2>Dish Container</h2>
			<Dishes dishes={this.props.dishes}/>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		dishes: state.dishes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDishes: () => dispatch(fetchDishes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesContainer)