import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'


class Dish extends Component {


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
				
				<div className="name">
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

				<button>{favorite()}</button>

				<CommentsContainer dishId={dish.unique_id} comments={this.props.comments}/>
			
			</div>
		)
	}
}

export default Dish