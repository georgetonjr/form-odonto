import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated, getToken } from "./Services/auth";

import Login from './Pages/Login/index';
import CadastroAluno from './Pages/Registro/RegistroAluno';
import CadastroProfessor from './Pages/Registro/RegistroProfessor';
import HomeAluno from './Pages/Aluno';
import HomeProfessor from './Pages/Professor';

import Form1 from './Components/forms/fichaClinica';
import Form2 from './Components/forms/pteDentistica';
import Form3 from './Components/forms/pteEndodontia';



console.log(getToken())
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadaluno" component={CadastroAluno} />
      <Route path="/cadprofessor" component={CadastroProfessor} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <PrivateRoute path="/homea" component={HomeAluno}/>
      <PrivateRoute path="/homep" component={HomeProfessor}/>

      <PrivateRoute path="/form1" component={Form1} />
      <PrivateRoute path="/form2" component={Form2} />
      <PrivateRoute path="/form3" component={Form3} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
  
);

export default Routes;