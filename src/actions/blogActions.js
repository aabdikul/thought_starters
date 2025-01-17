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
        dispatch({type: 'POSTING_NEW_DISH'})
        fetch('http://localhost:3000/dishes', inputObject)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'POSTED_DISH', responseJSON})
        })
    }

}

export const postDelete = (ruby_id, unique_id) => {
    let inputObject = {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({
        unique_id: unique_id
      })
    }
    return (dispatch) => {
        dispatch({type: 'DELETING_POST'})
        fetch(`http://localhost:3000/dishes/${ruby_id}`, inputObject)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'DELETED_POST', responseJSON})
        })
    }
}

export const updateFavorite = (ruby_id, favorite_status) => {
     let inputObject = {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({
        id: ruby_id,
        favorite: favorite_status
      })
    }

    return (dispatch) => {
        dispatch({type: 'UPDATING_FAVORITE'})
        fetch(`http://localhost:3000/dishes/${ruby_id}`, inputObject)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'UPDATED_FAVORITE', responseJSON})
        })
    }

}



