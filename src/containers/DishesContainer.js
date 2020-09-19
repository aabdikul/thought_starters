import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes, fetchComments, postDelete, updateFavorite } from '../actions/blogActions'
import Dishes from '../components/dishes/Dishes'
import './DishesContainer.css'


class DishesContainer extends Component {

	componentDidMount() {
		this.props.fetchDishes()
		this.props.fetchComments()
	}


	render() {

		return (
			<div className="dish-container">
			<h1>Thoughts and Recipes</h1>
			<Dishes dishes={this.props.dishes} updateFavorite={this.props.updateFavorite} comments={this.props.comments} delete={this.props.delete} favorite={this.props.favorite} postDelete={this.props.postDelete}/>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDishes: () => dispatch(fetchDishes()),
		fetchComments: () => dispatch(fetchComments()),
		delete: (post_id) => dispatch({type: "DELETE_POST", post_id}),
		favorite: (unique_id, favorite_status) => dispatch({type: "FAVORITE_POST", unique_id, favorite_status}),
		postDelete: (ruby_id, post_id) => dispatch(postDelete(ruby_id, post_id)),
		updateFavorite: (ruby_id, favorite_status) => dispatch(updateFavorite(ruby_id, favorite_status))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DishesContainer)