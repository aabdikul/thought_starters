export const fetchDishes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DISH'})
    fetch('http://localhost:3000/dishes')
    	.then(response => {
    		return response.json()
    	}).then(responseJSON => {
    		dispatch({type: 'ADD_DISH', dishes: responseJSON})
    	})
    }
}

export const postComment = (commentValue, dishIdValue, identifierValue) => {
	let inputObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({
        uuid: identifierValue,
        text: commentValue,
        post_id: dishIdValue,
        upvotes: 0,
        downvotes: 0
      })
    }

	return (dispatch) => {
		dispatch({type: 'POSTING_COMMENT'})
		fetch('http://localhost:3000/comments', inputObject)
		.then(response => {
			return response.json()
		}).then(responseJSON => {
			dispatch({type: 'POSTED_COMMENT', responseJSON})
		})
	}
}

export const fetchComments = () => {
	return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS'})
    fetch('http://localhost:3000/comments')
    	.then(response => {
    		return response.json()
    	}).then(responseJSON => {
    		dispatch({type: 'LOAD_COMMENT', comments: responseJSON})
    	})
    }
}

export const postNewPost = (unique_id, name, image, ingredients, instructions) => {
    
    let inputObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({
        unique_id: unique_id,
        name: name, 
        image: image, 
        ingredients: ingredients,
        instructions: instructions
      })
    }

    return (dispatch) => {
        dispatch({type: 'POSTING_NEW'})
        fetch('http://localhost:3000/dishes', inputObject)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'POSTED_COMMENT', responseJSON})
        })
    }

}



