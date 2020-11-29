import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';

const PteCirurgiaPlanejamento = props => {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState(null);
  const [obs, setObs] = useState('');
  const formId = props.history.location.state;
  const back = () => history.goBack()

  const changeStatus = s => api.post('/form/status', { id: formId, status: s, obs: obs }).then(() => {
    setStatus(true);
    alert('Formulario alterado com sucesso!');
  }).catch(e => console.log(e));

  useEffect(()=>{
    api.get('/form/getformbyid',{ headers: { id: formId} })
      .then(resp => {
        setForm(resp.data.form);
        setStatus(resp.data.status);
        setObs(resp.data.obs)
      })
      .catch(error => console.log(error.message))
  },[formId])
  
  return (
    <div>
      <button onClick={back}>Voltar</button>

      <h1>Ficha PTE Cirurgia</h1>

      <label>Paciente</label><br/>
      <input type="text" readOnly value={form?.paciente} /><br/>
      <label>Prontuario</label><br/>
      <input type="text" readOnly value={form?.prontuario} /><br/>
      
      <h3>Planejamento cirurgico</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Cirurgia nº</th>
            <th>Procedimento</th>
            <th>Elemento(s) dentario(s) / regiâo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><input type="text" readOnly value={form?.cirurgiaN}  /></th>
            <th><input type="text" readOnly value={form?.procedimentos} /></th>
            <th><input type="text" readOnly value={form?.elementoRegiaDentes}  /></th>
          </tr>
        </tbody>
      </table>

      <label>Operador</label><br/>
      <input 
        type="text"
        placeholder="Operador"
        readOnly 
        value={form?.operador}
      /> <br/>

      <label>Auxiliar</label><br/>
      <input 
        type="text"
        placeholder="Auxiliar"
        readOnly 
        value={form?.auxiliar}
      /> <br/>

      <label>Indicação/Prognostico</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.indicacaoProg}
      /> <br/>

      <label>Conduta pré-operatoria</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.condutaPreOper}
      /> <br/>

      <label>Adequação da área cirurgica</label><br/>
      <select readOnly value={form?.adequacaoAreaCirurgica} 
      >
        <option value="NAO">Sim</option>
        <option value="SIM">Não</option>
      </select> <br/>

      <label>Anti-sepsia</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.antiSepsia}
      /> <br/>

      <label>Anestesico/Número maximo de tubetes permitidos</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.anestesico}
      /> <br/>

      <label>Tecnica anestesica</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.tecnicaAnestesica}
      /> <br/>

      <label>Descrição da tecnica/Instrumental e material</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
      /> <br/>

      <label>Prescrição medicamentosa</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.prescricaoMedicamento}
      /> <br/>

      <label>Cuidados pós-operatorios</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        readOnly 
        value={form?.posOperatorio}
      /> <br/>

      <table border="1">
        <thead>
          <tr>
            <th>Discente</th>
            <th>Docente</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input 
                type="text"
                readOnly 
                value={form?.discente}
              />
            </th>
            <th>
              <input 
                type="text"
                readOnly 
                value={form?.docente}
              />
            </th>
            <th>
              <input 
                type="date"
                readOnly 
                value={form?.data}
              />
            </th>
          </tr>
        </tbody>
      </table>

      <label style={{alignSelf: 'center'}}>Observações</label> <br/>
      <textarea value={obs}  disabled={status ? true : false} cols="70" rows="10"></textarea><br/>

      <button style={{alignSelf: 'center'}} disabled={status ? true : false} onClick={()=> changeStatus(true)}>Aprovar</button>
      <button style={{alignSelf: 'center'}} disabled={status ? true : false} onClick={()=> changeStatus(false)}>Reprovar</button>
    

    </div>
  );
}
export default withRouter(PteCirurgiaPlanejamento);