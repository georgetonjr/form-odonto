export const TOKEN_KEY = "@form-Token";
export const Data_KEY = "@UserData";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => {
  localStorage.getItem(TOKEN_KEY);
  localStorage.getItem(Data_KEY);
};
export const setToken = (token,data) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(Data_KEY, data);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
