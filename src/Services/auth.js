import api from './api';

export const TOKEN_KEY = "@form-Token";
export const Data_KEY = "@UserData";
export const Tipo_KEY = "@tipo";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => {
  localStorage.getItem(TOKEN_KEY);
};

export const getUser =  async (prof = false) => {
  let cpd = localStorage.getItem('@UserData')
  var user = '';

  if(prof){
    user = '';
    user = await api.get('/getprofessor', { headers: { cpd }})
  }else{
    user = '';
    user = await api.get('/getaluno', { headers: { cpd }})
  }

  return user.data;
};

export const setToken = (token,data, tipo) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(Data_KEY, data);
  localStorage.setItem(Tipo_KEY, tipo);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};