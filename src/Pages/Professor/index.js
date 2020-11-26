import React , { useState, useEffect } from "react";
import { withRouter/*, useHistory*/ } from "react-router-dom";
//import api from  '../../Services/api';
import {getUser} from '../../Services/auth';

const HomeProfessor = () =>{
  const [user, setUser] = useState('');

  useEffect(() =>{
    async function get(){
      let professor = await getUser();
      setUser(professor)
    }
    get()
  },[])

  return(
    <h1>Bem vindo {user?.Nome}</h1>
  );
}
export default withRouter(HomeProfessor)