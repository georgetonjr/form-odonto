import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Services/auth";

import Login from './Pages/Login/index';
import CadastroAluno from './Pages/Registro/RegistroAluno';
import CadastroProfessor from './Pages/Registro/RegistroProfessor';
import HomeAluno from './Pages/Aluno';
import HomeProfessor from './Pages/Professor';

import form0 from './Components/forms/planejamentoDiario';
import Form1 from './Components/forms/fichaClinica';
import Form2 from './Components/forms/pteDentistica';
import Form3 from './Components/forms/pteEndodontia';
import Form4 from './Components/forms/ptePeriodontia';

import form0Professor from './Components/forms/professorPlanejamentoDiario';
import form1Professor from './Components/forms/professorFichacClinica';

import form0Aluno from './Components/forms/alunoPlanejamentoDiario';
import form1Aluno from './Components/forms/alunoFichaClinica';

const perfil = sessionStorage.getItem('@tipo')
console.log(perfil)

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

      <PrivateRoute path="/form0" component={form0} />
      <PrivateRoute path="/form1" component={Form1} />
      <PrivateRoute path="/form2" component={Form2} />
      <PrivateRoute path="/form3" component={Form3} />
      <PrivateRoute path="/form4" component={Form4} />

      <PrivateRoute path="/professor/form0" component={form0Professor} />
      <PrivateRoute path="/professor/form1" component={form1Professor} />

      <PrivateRoute path="/aluno/form0" component={form0Aluno} />
      <PrivateRoute path="/aluno/form1" component={form1Aluno} />


      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
  
);

export default Routes;