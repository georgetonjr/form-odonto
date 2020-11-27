import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';


const PlanejamentoDiario = props => {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const [aprovado, setAprovado] = useState(false);
  const [form, setForm] = useState(null);
  const [obs, setObs] = useState('');
  const formId = props.history.location.state;
  const back = () => history.goBack()

  useEffect(()=>{
    api.get('/form/getformbyid',{ headers: { id: formId} })
      .then(resp => {
        setForm(resp.data.form);
        setStatus(resp.data.status);
        setAprovado(resp.data.aprovado)
        setObs(resp.data.obs)
      })
      .catch(error => console.log(error.message))
  },[formId])

  return (
    <div>
      <button onClick={back}>Voltar</button>

      {status ?
       aprovado? <h3 style={{color: 'green'}}>Aprovado</h3> : <h3 style={{color: 'red'}}>Reprovado</h3>
       : <h3>Aguardando resposta...</h3>}

      <h1>Planejamento diario</h1>

      <label>Paciente</label><br/>
      <input type="text" readOnly value={form?.paciente}/><br/>
      <label>Prontuario</label><br/>
      <input type="text" readOnly value={form?.prontuario} /><br/>
      
      <label>Data</label><br/>
      <input type="date" readOnly value={form?.data} /><br/>

      <label>Região/Dente(s):</label><br/>
      <input type="text" readOnly value={form?.regiaDentes} /><br/>

      <label>Especialidade:</label><br/>
      <input type="text" readOnly value={form?.especialidade} /><br/>

      <label>Procedimentos:</label><br/>
      <input type="text" readOnly value={form?.procedimentos} /><br/>

      <label>Planejamento:</label><br/>
      <textarea value={form?.planejamento} readOnly cols="30" rows="10"></textarea>
      <table border="1">
        <tr>
          <th>Discente: <input readOnly type="text" value={form?.discente} /></th>
          <th>Auxiliar: <input readOnly type="text" value={form?.auxiliar} /></th>
          <th>Docente: <input readOnly type="text" value={form?.docente} /></th>
        </tr>
      </table>

      <label style={{alignSelf: 'center'}}>Observações</label> <br/>
      <textarea value={obs}  disabled={status ? true : false} cols="70" rows="10"></textarea><br/>

    </div>
  );
}

export default withRouter(PlanejamentoDiario);
      