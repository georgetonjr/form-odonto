import React/*, { useState } */from "react";
import { withRouter, useHistory } from "react-router-dom";
//import api from  '../../Services/api';
//import auth from '../../Services/auth';

const HomeALuno = () =>{
  document.title = 'Home' 
  const history = useHistory();
  const Form = (form) => { history.push(`/${form}`)}
  
  return(
    <div>
      <h1>Aluno</h1>
      <button onClick={()=>Form('form1')}>Ficha Clinica</button><br/>
      <button onClick={()=>Form('form2')}>Ficha PTE Dentística</button><br/>
      <button onClick={()=>Form('form3')}>Ficha PTE Endodontia</button><br/>
    </div>
  );
}
export default withRouter(HomeALuno)