// reducers/authReducer.js
const initialState = {
    email: '',
    password: '',
    fullName: '',
    companyName: '',
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      case 'SET_FULL_NAME':
        return {
          ...state,
          fullName: action.payload,
        };
      case 'SET_COMPANY_NAME':
        return {
          ...state,
          companyName: action.payload,
        };
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          isAuthenticated: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  