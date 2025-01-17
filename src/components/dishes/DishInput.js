import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { postNewPost } from '../../actions/blogActions';
import './DishInput.css'

class DishInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			image: '',
			ingredients: '',
			instructions: '',
			favorite: false
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		let unique_id = uuid();
		this.props.addPost(unique_id, this.state.name, this.state.image, this.state.ingredients, this.state.instructions);
		this.props.postNewPost(unique_id, this.state.name, this.state.image, this.state.ingredients, this.state.instructions, this.state.favorite);
		this.setState({
			name: '',
			image: '',
			ingredients: '',
			instructions: ''
		})
	}

	render() {
		return (
			<div>
				<h3>New Dish</h3>
			<br/>
				<form className="create-dish" onSubmit={this.handleSubmit}>
					<p>Name: <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/></p>
					<p>Image Link: <input type="text" name="image" onChange={this.handleChange} value={this.state.image}/></p>
					<p>Ingredients: <input type="text" name="ingredients" onChange={this.handleChange} value={this.state.ingredients}/></p>
					<p>Instructions: <input type="text" name="instructions" onChange={this.handleChange} value= {this.state.instructions}/></p>
					<p><input type="submit"/></p>
				</form>
			</div>
		)
	}

}

const mapDispatchToProps = dispatch => {
	return {
		postNewPost: (unique_id, name, image, ingredients, instructions, favorite) => dispatch(postNewPost(unique_id, name, image, ingredients, instructions, favorite)),
		addPost: (unique_id, name, image, ingredients, instructions) => dispatch({type: 'ADD_POST', unique_id, name, image, ingredients, instructions})
	}
}

export default connect(null, mapDispatchToProps)(DishInput)