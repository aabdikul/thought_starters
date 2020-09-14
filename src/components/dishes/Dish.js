import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Dish extends Component {

	render() {

		const {dish} = this.props

		return (
			<div>
			Name: {dish.name}
			<br/>
			Ingredients: {dish.ingredients}
			<br/>
			Instructions: {dish.instructions}
			<br/>
			<CommentsContainer />
			</div>
		)
	}
}

export default Dish