"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.setToken = exports.getToken = exports.isAuthenticated = exports.Tipo_KEY = exports.Data_KEY = exports.TOKEN_KEY = void 0;
var TOKEN_KEY = "@form-Token";
exports.TOKEN_KEY = TOKEN_KEY;
var Data_KEY = "@UserData";
exports.Data_KEY = Data_KEY;
var Tipo_KEY = "@tipo";
exports.Tipo_KEY = Tipo_KEY;

var isAuthenticated = function isAuthenticated() {
  return sessionStorage.getItem(TOKEN_KEY) !== null;
};

exports.isAuthenticated = isAuthenticated;

var getToken = function getToken() {
  sessionStorage.getItem(TOKEN_KEY);
  sessionStorage.getItem(Data_KEY);
};

exports.getToken = getToken;

var setToken = function setToken(token, data, tipo) {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(Data_KEY, data);
  sessionStorage.setItem(Tipo_KEY, tipo);
};

exports.setToken = setToken;

var logout = function logout() {
  sessionStorage.removeItem(TOKEN_KEY);
};

exports.logout = logout;