import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {getUser} from '../../Services/auth';

const HomeALuno = () =>{
  const [user, setUser] = useState('');

  useEffect(() =>{
    async function get(){
      let aluno = await getUser();
      setUser(aluno)
    }
    get()
  },[])



  document.title = 'Home' 
  const history = useHistory();
  const Form = (form) => { history.push(`/${form}`,{})}
  
  return(
    <div>
      <h1>Bem vindo {user?.Nome}</h1>
      <button onClick={()=>Form('form1')}>Ficha Clinica</button><br/>
      <button onClick={()=>Form('form2')}>Ficha PTE Dentística</button><br/>
      <button onClick={()=>Form('form3')}>Ficha PTE Endodontia</button><br/>
    </div>
  );
}
export default withRouter(HomeALuno)