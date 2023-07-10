// actions/authActions.js
export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  
  export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password,
  });
  
  export const setFullName = (fullName) => ({
    type: 'SET_FULL_NAME',
    payload: fullName,
  });
  
  export const setCompanyName = (companyName) => ({
    type: 'SET_COMPANY_NAME',
    payload: companyName,
  });
  
  export const setAuthenticated = (isAuthenticated) => ({
    type: 'SET_AUTHENTICATED',
    payload: isAuthenticated,
  });
  