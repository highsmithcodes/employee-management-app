// reducers/postReducer.js
const initialState = {
    postsList: [],
    title: '',
    content: '',
    company: '',
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS_LIST':
        return {
          ...state,
          postsList: action.payload,
        };
      case 'SET_POST_TITLE':
        return {
          ...state,
          title: action.payload,
        };
      case 'SET_POST_CONTENT':
        return {
          ...state,
          content: action.payload,
        };
      case 'SET_POST_COMPANY':
        return {
          ...state,
          company: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  