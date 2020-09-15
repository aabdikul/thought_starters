import React, { Component } from 'react';
import Dish from './Dish'

class Dishes extends Component {

	render() {
	
	const dish = this.props.dishes.map((dish) => {
		return <Dish key={dish.unique_id} dish={dish} comments={this.props.comments}/>
	})

		return (
			<div>
			{dish}
			</div>
		)
	}
}

export default Dishes