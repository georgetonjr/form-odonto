import React, { useState } from "react";
import classes from './styles.module.css';
import { withRouter, Link, useHistory } from "react-router-dom";
import api from  '../../Services/api';
import { setToken } from '../../Services/auth';

const Login = () =>{
  const [CPD, setCPD] = useState('')
  const [Senha, setSenha] = useState('')
  const [selectedValue, setSelectedValue] = useState('Aluno')
  const cons = () => console.log(CPD, Senha);
  const history = useHistory();

  const logar = async ()=>{
    if(selectedValue === 'Aluno'){
      api.post('/siginaluno',{
        CPD,
        Senha,
      }).then(res => {
        setToken(res.data.token, {"Aluno": true});
        history.push('/homea');
        })
        .catch(() => alert('Usuario não encontrado'));
    }
    else if(selectedValue === 'Professor'){
      api.post('/siginprofessor',{
        CPD,
        Senha,
      }).then(res => {
        setToken(res.data.token, {"Professor": true})
        history.push('/homep');
      }).catch(() => alert('Usuario não encontrado'));
    }
  }

  return(
    <div className={classes.form}>
          <h1>Login</h1>
          
            <select
              value={selectedValue}
              onChange={e=> setSelectedValue(e.target.value)}>
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
            </select>
            <br/>
            <label className={classes.label}>CPD</label><br/>
            <input 
              type="text"
              value={CPD}
              onChange={e=> setCPD(e.target.value)}
              className={classes.input}
              required
              onKeyPress={cons}
            /><br/>
            <label className={classes.label}>Senha</label><br/>
            <input 
              type="password"
              value={Senha}
              onChange={e=> setSenha(e.target.value)}
              className={classes.input}
              required
            />
            <button onClick={logar}>Login</button><br/>
            <Link to="/cadaluno">Cadastro Aluno</Link><br/>
            <Link to="/cadprofessor">Cadastro Professor</Link>
         
        </div>
  );
}

export default withRouter(Login);

