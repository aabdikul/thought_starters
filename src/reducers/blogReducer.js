import uuid from 'uuid';

const blogReducer = (state = {dishes:[], outfits:[], comments:[]}, action) => {
  
  switch(action.type) {
    case 'ADD_COMMENT':

    const comment = {
      uuid: uuid(),
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


    default:
      return state;
  }
}
 
export default blogReducer;