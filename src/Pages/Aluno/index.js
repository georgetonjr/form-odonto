import React/*, { useState } */from "react";
import { withRouter, useHistory,Link } from "react-router-dom";
//import api from  '../../Services/api';
//import auth from '../../Services/auth';

const HomeALuno = () =>{
  const history = useHistory();
  const form = () => { history.push('/form1')}
  return(
    <div>
      <h1>dsafs</h1>
      <button onClick={form}></button>
      <Link to="/form1">Ficha Clinica</Link>
    </div>
  );
}
export default withRouter(HomeALuno)