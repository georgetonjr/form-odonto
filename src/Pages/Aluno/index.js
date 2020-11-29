import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {getUser} from '../../Services/auth';
import api from  '../../Services/api';

const HomeALuno = () =>{
  const [user, setUser] = useState('');
  const [forms, setForms] = useState([]);
  const [check, setCheck] = useState(false);

  const get = async () => {
    let aluno = await getUser(false);
    setUser(aluno)
  }

  const sair = () => {
    localStorage.clear();
    history.push('/')
  }

  const openForm = ( i,f) => {
    let loc;
    switch (f) {
      case 'Ficha Clinica':
        loc= 'form1';
        break;
      case 'Planejamento diario':
        loc= 'form0';
        break;
      case 'Planejamento Cirurgico':
        loc='form2'
        break;
      default:
        history.push('/homep');
        break;
    }
    
    history.push(`/aluno/${loc}`, i)
  }

  const getForm = async() => {
    if(check === false && user !== '' ){
      const form = await api.get('/form/getaluno', {headers: { aluno: user?._id}});
      setForms(form.data);
      setCheck(true);
      console.log(form.data)
    }
  }

  useEffect(() =>{
    get()
  },[])

  setTimeout(()=>{
    getForm()
    clearTimeout()
  }, 2000)

  document.title = 'Home' 
  const history = useHistory();
  const Form = (form) => { history.push(`/${form}`,{})}
  
  return(
    <div>
      <h1>Bem vindo {user?.Nome}</h1>
      <button onClick={()=>Form('form0')}>Ficha Planejamento Diario</button><br/>
      <button onClick={()=>Form('form1')}>Ficha Clinica</button><br/>
      <button onClick={()=>Form('form5')}>Ficha Atendimento de Urgência</button><br/>
      <button onClick={()=>Form('form2')}>Ficha PTE Dentística</button><br/>
      <button onClick={()=>Form('form3')}>Ficha PTE Endodontia</button><br/>
      <button onClick={()=>Form('form4')}>Ficha PTE Periodontia</button><br/>
      <button onClick={()=>Form('form6')}>Ficha PTE planejamento cirurgia</button><br/>

      {check ? 
        <table border='1'>
        <thead>
          <tr>
            <th>Formulario</th>
            <th>Professor</th>
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
            <th>{item?.professor?.Nome}</th>
            <th>{(new Date(item?.createdAt).toUTCString())}</th>
            <th><button onClick={()=> openForm(item?._id, item?.nameForm)}>Abrir</button></th>
          </tr>
        )}
        </tbody>
      </table>
      :<> </>}

      <button onClick={sair}>Sair</button>
    </div>
  );
}
export default withRouter(HomeALuno)