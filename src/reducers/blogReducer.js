
const blogReducer = (state = {dishes:{}, outfits:[], comments:[]}, action) => {
  
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
      dishes: {...state.dishes},
      loading: true
    }

    case 'ADD_DISH':
    const dishes = action.dishes

    const placeholder = {}

    for (const element of dishes) {
        placeholder[element.unique_id]=element
    }

    return {
      ...state, 
      dishes: {...state.dishes, ...placeholder}
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
        comments: [...comments]
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
    const newNewPost = {}
    newNewPost[action.unique_id] = newPost
    const inputPost = Object.assign(state.dishes,newNewPost)

    return {
      ...state, dishes: {...inputPost}
    }


    case 'DELETE_POST':
    
    const placeh = Object.assign({}, state.dishes)
    delete placeh[action.post_id]

    return {...state, dishes: {...placeh}}

    case 'FAVORITE_POST':
    const favoriteDish = Object.assign({}, state.dishes[action.unique_id])
    favoriteDish.favorite = !action.favorite_status
    const favoriteDishInput = {} 
    favoriteDishInput[action.unique_id] = favoriteDish
    return {
      ...state, 
      dishes: {...state.dishes, ...favoriteDishInput}
    }
    


    default:
      return state;
  }
}
 
export default blogReducer;