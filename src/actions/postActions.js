// actions/postActions.js
export const setPostsList = (postsList) => ({
    type: 'SET_POSTS_LIST',
    payload: postsList,
  });
  
  export const setPostTitle = (title) => ({
    type: 'SET_POST_TITLE',
    payload: title,
  });
  
  export const setPostContent = (content) => ({
    type: 'SET_POST_CONTENT',
    payload: content,
  });
  
  export const setPostCompany = (company) => ({
    type: 'SET_POST_COMPANY',
    payload: company,
  });
  