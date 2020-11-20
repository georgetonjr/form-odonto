import React/*, { useState } */from "react";
import { withRouter, useHistory } from "react-router-dom";
//import api from  '../../Services/api';
//import auth from '../../Services/auth';

const HomeALuno = () =>{
  const history = useHistory();
  const Form = (form) => { history.push(`/${form}`)}
  return(
    <div>
      <h1>dsafs</h1>
      <button onClick={()=>Form('form1')}>Ficha Clinica</button><br/>
      <button onClick={()=>Form('form2')}>Ficha PTE Dentística</button><br/>
    </div>
  );
}
export default withRouter(HomeALuno)