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

export const postComment = (commentValue) => {

	let inputObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       body: JSON.stringify({
        uuid: commentValue.uuid,
        text: commentValue.text,
        post_id: commentValue.post_id,
        upvotes: 0,
        downvotes: 0
      })
    }

	return (dispatch) => {
		console.log(inputObject)
		dispatch({type: 'POSTING_COMMENT'})
		fetch('http://localhost:3000/comments', inputObject)
		.then(response => {
			return response.json()
		}).then(responseJSON => {
			dispatch({type: 'POSTED_COMMENT', responseJSON})
		})
	}
}


