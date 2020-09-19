import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import './Dish.css'


class Dish extends Component {


	handleFavorite = (unique_id, favorite_status, ruby_id) => {
		this.props.favorite(unique_id, favorite_status);
		this.props.updateFavorite(ruby_id, favorite_status);
	}

	handleDelete = (ruby_id, unique_id) => {
		this.props.delete(unique_id);
		this.props.postDelete(ruby_id, unique_id)
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
				<button className="heart" onClick={() => this.handleFavorite(this.props.dish.unique_id, this.props.dish.favorite, this.props.dish.id)}>{favorite()}</button>
			
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
				<button className="delete" onClick={() => this.handleDelete(this.props.dish.id, this.props.dish.unique_id)}>Delete Post</button>
				</div>
			</div>
		)
	}
}

export default Dish