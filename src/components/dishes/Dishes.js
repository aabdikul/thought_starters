import React, { Component } from 'react';
import Dish from './Dish'

class Dishes extends Component {

	render() {
	console.log(this.props.dishes)
	const dish = this.props.dishes.map((dish) => {
		return <Dish key={dish.unique_id} dish={dish} comments={this.props.comments} delete={this.props.delete} favorite={this.props.favorite}/>
	})

		return (
			<div>
			{dish}
			</div>
		)
	}
}

export default Dishes