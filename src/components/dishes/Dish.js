import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import DishStyle from './Dish.css'


class Dish extends Component {

	handleClick = () => {
		console.log("clicked the heart button, need to update status in backend")	
	}


	render() {

		const {dish} = this.props
		const whiteHeart = '\u2661';
		const blackHeart = '\u2665';

		const favorite = () => {
			if (this.props.dish.favorite === true) {
				return blackHeart
			}
			else {
				return whiteHeart
			}
		}
		
		return (
			<div className="dish-post">
				
			
				<h1>{dish.name}</h1>
			

				<br/>

				
					<img src={dish.image}/>

				<br/>

				Ingredients: {dish.ingredients}
				
				<br/>
				
				Instructions: {dish.instructions}
				
				<br/>

				<button>{favorite()}</button>

				<CommentsContainer dishId={dish.unique_id} comments={this.props.comments}/>
			
			</div>
		)
	}
}

export default Dish