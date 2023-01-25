export const checkIfAuthenticated = () =>
  document.cookie.includes('_user_session');
