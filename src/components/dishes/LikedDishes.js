import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDishes, fetchComments, postDelete, updateFavorite } from '../../actions/blogActions'
import Dishes from './Dishes'



class LikedDishes extends Component {

	componentDidMount() {
		this.props.fetchDishes()
		this.props.fetchComments()
	}

	render() {

		if (Object.keys(this.props.dishes).length !== 0) {

			let filteredObjects = {}
			const unfilteredKeys = Object.keys(this.props.dishes)

			unfilteredKeys.map((key) => {
				if (this.props.dishes[key].favorite === true) {
					filteredObjects[key] = this.props.dishes[key]
					return
				}
				else {return}
			})
		

		return (
			<div className="dish-container">


					<Dishes dishes={filteredObjects} 
							updateFavorite={this.props.updateFavorite} 
							comments={this.props.comments} 
							delete={this.props.delete} 
							favorite={this.props.favorite} 
							postDelete={this.props.postDelete}
					/>

			</div>
		)
		}
		//if
		else {return null}
	}
	//render
}
//component

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

export default connect(mapStateToProps, mapDispatchToProps)(LikedDishes)