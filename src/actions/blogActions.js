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


