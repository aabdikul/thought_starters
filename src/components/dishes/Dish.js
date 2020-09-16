import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import './Dish.css'


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
				<button className="heart">{favorite()}</button>
			
				<h2>{dish.name}</h2>
			

				<br/>

				
					<img src={dish.image} alt={dish.id}/>

				<br/>

				<div className="ingredients"><strong>Ingredients: </strong>{dish.ingredients}</div>
				
				<br/>
				
				<div className="instructions"><strong>Instructions:</strong> {dish.instructions}</div>
				
				<br/>
				<div className="comment-container">
				<CommentsContainer dishId={dish.unique_id} comments={this.props.comments}/>
				<br/>
				<button className="delete">Delete Post</button>
				</div>
			</div>
		)
	}
}

export default Dish