import uuid from 'uuid';

const blogReducer = (state = {dishes:[], outfits:[], comments:[]}, action) => {
  
  switch(action.type) {
    case 'ADD_COMMENT':

    const comment = {
      uuid: uuid(),
      text: action.comment,
      post_id: 1
    }

    return {
      ...state, comments: [...state.comments, comment]
    }
    
    default:
      return state;
  }
}
 
export default blogReducer;