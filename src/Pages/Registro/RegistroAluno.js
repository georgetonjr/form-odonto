import React, { useState } from "react";
import classes from './styles.module.css';
import { withRouter, useHistory } from "react-router-dom";
import api from  '../../Services/api';
//import auth from '../../Services/auth';

const RegistroAluno = () =>{
  const [CPD, setCPD] = useState('');
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const cons = () => console.log(CPD, Senha);

  const history = useHistory();

  const Cadastro = async ()=>{
    api.post('/cadaluno',{
      Nome,
      CPD,
      Email,
      Senha,
    })
    .then(() => {
      alert('Usuario Cadastrado com sucesso!!')
      history.push('/login')
    })
    .catch(e => console.log(e));
  }

  return(
    <div className={classes.form}>
          <h1>Cadastro Aluno</h1>

            <label className={classes.label}>Nome</label><br/>
            <input 
              type="text"
              value={Nome}
              onChange={e=> setNome(e.target.value)}
              className={classes.input}
              required
              onKeyPress={cons}
            /><br/>

            <label className={classes.label}>CPD</label><br/>
            <input 
              type="text"
              value={CPD}
              onChange={e=> setCPD(e.target.value)}
              className={classes.input}
              required
              onKeyPress={cons}
            /><br/>

            <label className={classes.label}>Email</label><br/>
            <input 
              type="text"
              value={Email}
              onChange={e=> setEmail(e.target.value)}
              className={classes.input}
              required
            /><br/>

            <label className={classes.label}>Senha</label><br/>
            <input 
              type="password"
              value={Senha}
              onChange={e=> setSenha(e.target.value)}
              className={classes.input}
              required
              style={{marginBottom: '25px'}}
            />

            <button onClick={Cadastro}>Cadastrar</button>
         
        </div>
  );
}

export default withRouter(RegistroAluno);

