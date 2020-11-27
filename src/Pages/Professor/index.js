import React , { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import api from  '../../Services/api';
import {getUser} from '../../Services/auth';

const HomeProfessor = () =>{
  const [user, setUser] = useState('');
  const [forms, setForms] = useState([]);
  const [check, setCheck] = useState(false);
  const history = useHistory();

  const get = async () => {
    let professor = await getUser(true);
    setUser(professor)
  }

  const getForm = async() => {
    if(check === false && user !== '' ){
      const form = await api.get('/form/getprof', {headers: { professor: user?._id}});
      setForms(form.data);
      setCheck(true);
    }
  }

  const openForm = ( i,f) => {
    let loc;
    switch (f) {
      case 'Ficha Clinica':
        loc= 'form1';
        break;
      case '':
        break;
      default:
        history.push('/homep');
        break;
    }
    
    history.push(`/professor/${loc}`, i)
  }

  

  useEffect(() =>{  
    get()
  },[])

  setTimeout(()=>{
    getForm()
    clearTimeout()
  }, 2000)
 
  
  return(
    <div>
      <h1>Bem vindo {user?.Nome}</h1>

      {check ? 
        <table border='1'>
        <thead>
          <tr>
            <th>Formulario</th>
            <th>Aluno</th>
            <th>Abrir ficha</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        {forms.map(item => 
        
          <tr key={item?._id}>
            <th>
              {item?.nameForm}
            </th> 
            <th>{item?.aluno.Nome}</th>
            <th>{(new Date(item?.createdAt).toUTCString())}</th>
            <th><button onClick={()=> openForm(item?._id, item?.nameForm)}>Abrir</button></th>
          </tr>
        )}
        </tbody>
      </table>
      :<> </>}
      
   </div>
  );
}
export default withRouter(HomeProfessor)