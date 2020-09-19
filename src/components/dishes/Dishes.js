import React, { Component } from 'react';
import Dish from './Dish'

class Dishes extends Component {

	render() {

		if (Object.keys(this.props.dishes).length !== 0) {
			const dish = Object.keys(this.props.dishes).map((key) => {
				const disher = this.props.dishes[key]
				return <Dish key={disher.unique_id} updateFavorite={this.props.updateFavorite} dish={disher} comments={this.props.comments} delete={this.props.delete} favorite={this.props.favorite} postDelete={this.props.postDelete}/>	
			})

		return (
			<div>
				{dish}					
			</div>
		)

		} else {
			return null
		}
	}
}

export default Dishes