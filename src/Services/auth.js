import api from './api';

export const TOKEN_KEY = "@form-Token";
export const Data_KEY = "@UserData";
export const Tipo_KEY = "@tipo";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => {
  sessionStorage.getItem(TOKEN_KEY);
};

export const getUser =  async () => {
  let cpd = sessionStorage.getItem('@UserData')
  const user = await api.get('/getaluno', { headers: { cpd }})
  return user.data;
};

export const setToken = (token,data, tipo) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(Data_KEY, data);
  sessionStorage.setItem(Tipo_KEY, tipo);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};