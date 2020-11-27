import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';
import {getUser} from '../../Services/auth';

const PlanejamentoDiario = props => {
  const history = useHistory();
  const nameform = 'Planejamento diario';
  const [user, setUser] = useState();
  const [ professores, setProfessores] = useState([]);
  const [professor, setProfessor] = useState();

  const [paciente, setPaciente] = useState();
  const [prontuario, setProntuario] = useState();
  const [data, setData] = useState();
  const [especialidade, setEspecialidade] = useState();
  const [planejamento, setPlanejamento] = useState();
  const [regiaDentes, setRegiaoDentes] = useState();
  const [procedimentos, setProcedimentos] = useState();
  const [discente, setDiscente] = useState();
  const [auxiliar, setAuxiliar] = useState();
  const [docente, setDocente] = useState();
  const [form, setForm] = useState();

  const loadForm = ()=> {
    setForm({
      paciente, prontuario, data, especialidade,
      planejamento, regiaDentes, procedimentos,
      discente, auxiliar, docente,
    })
  }

  const enviar = async() => {
    loadForm()

    api.post('/form/create',{
      nameform,
      form,
      aluno: user?._id,
      professor: professor
    })  
      .then(resp => {
        console.log(resp.data)
        alert('Enviado com sucesso');
        history.goBack();
      })
      .catch(error => {
        console.log(error)
        alert('Algo deu errado, por favor tente novamente mais tarde!')
        history.goBack(); 
      })
  }

  useEffect(() => {
    api.get('/getallprof')
      .then(resp => setProfessores(resp.data))
      .catch(error => console.error(error.message));  
    getUser().then(r => setUser(r)); 
  }, [])

  return (
    <div>
      <select value={professor} onChange={e => setProfessor( e.target.value)} >
        <option value=''>Selecione o professor</option>
        {professores.map(item => <option key={item?._id} value={item?._id}>{item?.Nome}</option> )}
      </select>

      <h1>Planejamento diario</h1>

      <label>Paciente</label><br/>
      <input type="text" value={paciente} onChange={e => setPaciente(e.target.value)}/><br/>
      <label>Prontuario</label><br/>
      <input type="text" value={prontuario} onChange={e => setProntuario(e.target.value)}/><br/>
      
      <label>Data</label><br/>
      <input type="date" value={data} onChange={e => setData(e.target.value)}/><br/>

      <label>Região/Dente(s):</label><br/>
      <input type="text" value={regiaDentes} onChange={e => setRegiaoDentes(e.target.value)}/><br/>

      <label>Especialidade:</label><br/>
      <input type="text" value={especialidade} onChange={e => setEspecialidade(e.target.value)}/><br/>

      <label>Procedimentos:</label><br/>
      <input type="text" value={procedimentos} onChange={e => setProcedimentos(e.target.value)}/><br/>

      <label>Planejamento:</label><br/>
      <textarea value={planejamento} onChange={e => setPlanejamento(e.target.value)} cols="30" rows="10"></textarea>
      <table border="1">
        <tbody>
          <tr>
            <th>Discente: <input type="text" value={discente} onChange={e => setDiscente(e.target.value)}/></th>
            <th>Auxiliar: <input type="text" value={auxiliar} onChange={e => setAuxiliar(e.target.value)}/></th>
            <th>Docente: <input type="text" value={docente} onChange={e => setDocente(e.target.value)}/></th>
          </tr>
        </tbody>
      </table>
      <button style={{alignSelf: 'center'}} onClick={enviar}>Enviar</button>
    </div>
  );
}

export default withRouter(PlanejamentoDiario);
      