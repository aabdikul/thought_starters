import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'


class Dish extends Component {

	render() {

		const {dish} = this.props
	
		return (
			<div className="dish-post">
				
				<div className="name" onClick={() => console.log("hi")}>
					Name: {dish.name}
				</div>

				<br/>

				<div className = "image">
					<img src={dish.image}/>
				</div>

				<br/>

				Ingredients: {dish.ingredients}
				
				<br/>
				
				Instructions: {dish.instructions}
				
				<br/>
			
			<CommentsContainer dishId={dish.unique_id} comments={this.props.comments}/>
			</div>
		)
	}
}

export default Dish