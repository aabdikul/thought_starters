
const blogReducer = (state = {dishes:[], outfits:[], comments:[]}, action) => {
  
  switch(action.type) {
    case 'ADD_COMMENT':

    const comment = {
      uuid: action.identifier,
      text: action.comment,
      post_id: action.dishId
    }
    

    return {
      ...state, comments: [...state.comments, comment]
    }

    case 'LOADING_DISH':
    return {
      ...state,
      dishes: [...state.dishes],
      loading: true
    }

    case 'ADD_DISH':
    const dishes = action.dishes
    return {
      ...state, 
      dishes: [...state.dishes, ...dishes]
    }

    case 'LOADING_COMMENTS':
    return {
      ...state, 
      comments: [...state.comments],
      loading: true
    }

    case 'LOAD_COMMENT':
    const comments = action.comments
    return {
        ...state, 
        comments: [...state.comments, ...comments]
    }

    case 'ADD_POST':
    const newPost = {
      unique_id: action.unique_id,
      name: action.name,
      image: action.image,
      ingredients: action.ingredients,
      instructions: action.instructions,
      favorite: false
    }
    return {
      ...state, dishes: [...state.dishes, newPost]
    }

    case 'DELETE_POST':
    const deleted = state.dishes.filter(dish => dish.unique_id !== action.post_id)
    console.log(deleted)

    case 'FAVORITE_POST':
    console.log(state)
    console.log(action)
    


    default:
      return state;
  }
}
 
export default blogReducer;