import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';
import {getUser} from '../../Services/auth';

const PteCirurgiaPlanejamento = props => {
  const history = useHistory();
  const nameform = 'Planejamento Cirurgico';

  const [user, setUser] = useState();

  const [professores, setProfessores] = useState([]);
  const [professor, setProfessor] = useState();
  const [paciente, setPaciente] = useState();
  const [prontuario, setProntuario] = useState();
  const [data, setData] = useState();
  const [cirurgiaN, setCirurgiaN] = useState();
  const [operador, setOperador] = useState();
  const [elementoRegiaDentes, setElementoRegiaDentes] = useState();
  const [procedimentos, setProcedimentos] = useState();
  const [discente, setDiscente] = useState();
  const [auxiliar, setAuxiliar] = useState();
  const [docente, setDocente] = useState();
  const [adequacaoAreaCirurgica, setAdequacaoAreaCirurgica] = useState();
  const [indicacaoProg, setIndicacaoProg] = useState();
  const [condutaPreOper, setCondutaPreOper] = useState();
  const [anestesico, setAnestesico] = useState();
  const [tecnicaAnestesica, setTecnicaAnestesica] = useState();
  const [descricaoTecnica, setDescricaoTecnica] = useState();
  const [prescricaoMedicamento, setPrescricaoMedicamento] = useState();
  const [posOperatorio, setPosOperatorio] = useState();
  const [antiSepsia, setAntiSepsia] = useState();
  const [formulario, setFormulario] = useState();

  const loadFormulario = ()=> {
    setFormulario({
      professor, paciente, prontuario, data, cirurgiaN, operador, elementoRegiaDentes,
      procedimentos, discente, auxiliar, docente, adequacaoAreaCirurgica, indicacaoProg,
      condutaPreOper, anestesico, tecnicaAnestesica, descricaoTecnica, prescricaoMedicamento,
      posOperatorio, antiSepsia,
    });

    console.log(formulario)
  }
  // eslint-disable-next-line
  useEffect(()=> loadFormulario(), [data])

  const enviar = async() => {
    loadFormulario()
    
    api.post('/form/create',{
      "form": {
        professor, paciente, prontuario, data, cirurgiaN, operador, elementoRegiaDentes,
      procedimentos, discente, auxiliar, docente, adequacaoAreaCirurgica, indicacaoProg,
      condutaPreOper, anestesico, tecnicaAnestesica, descricaoTecnica, prescricaoMedicamento,
      posOperatorio, antiSepsia,
      },
      nameform,
      aluno: user?._id,
      professor: professor
    })  
      .then(resp => {
        alert('Enviado com sucesso');
        history.push('homea');
      })
      .catch(error => {
        console.log(error)
        alert('Algo deu errado, por favor tente novamente mais tarde!')
        history.push('homea');
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

      <h1>Ficha PTE Cirurgia</h1>

      <label>Paciente</label><br/>
      <input type="text" value={paciente} onChange={e => setPaciente(e.target.value)} /><br/>
      <label>Prontuario</label><br/>
      <input type="text" value={prontuario} onChange={e => setProntuario(e.target.value)}/><br/>
      
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
            <th><input type="text" value={cirurgiaN} onChange={e => setCirurgiaN(e.target.value)} /></th>
            <th><input type="text" value={procedimentos} onChange={e => setProcedimentos(e.target.value)} /></th>
            <th><input type="text" value={elementoRegiaDentes} onChange={e => setElementoRegiaDentes(e.target.value)} /></th>
          </tr>
        </tbody>
      </table>

      <label>Operador</label><br/>
      <input 
        type="text"
        placeholder="Operador"
        value={operador}
        onChange={e=> setOperador(e.target.value)}
      /> <br/>

      <label>Auxiliar</label><br/>
      <input 
        type="text"
        placeholder="Auxiliar"
        value={auxiliar}
        onChange={e => setAuxiliar(e.target.value)}
      /> <br/>

      <label>Indicação/Prognostico</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={indicacaoProg}
        onChange={e => setIndicacaoProg(e.target.value)}
      /> <br/>

      <label>Conduta pré-operatoria</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={condutaPreOper}
        onChange={e => setCondutaPreOper(e.target.value)}
      /> <br/>

      <label>Adequação da área cirurgica</label><br/>
      <select value={adequacaoAreaCirurgica} 
        onChange={e => setAdequacaoAreaCirurgica(e.target.value)} 
      >
        <option value="NAO">Sim</option>
        <option value="SIM">Não</option>
      </select> <br/>

      <label>Anti-sepsia</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={antiSepsia}
        onChange={e => setAntiSepsia(e.target.value)}
      /> <br/>

      <label>Anestesico/Número maximo de tubetes permitidos</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={anestesico}
        onChange={e => setAnestesico(e.target.value)}
      /> <br/>

      <label>Tecnica anestesica</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={tecnicaAnestesica}
        onChange={e => setTecnicaAnestesica(e.target.value)}
      /> <br/>

      <label>Descrição da tecnica/Instrumental e material</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={descricaoTecnica}
        onChange={e => setDescricaoTecnica(e.target.value)}
      /> <br/>

      <label>Prescrição medicamentosa</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={prescricaoMedicamento}
        onChange={e => setPrescricaoMedicamento(e.target.value)}
      /> <br/>

      <label>Cuidados pós-operatorios</label><br/>
      <textarea 
        cols="30" 
        rows="1"
        value={posOperatorio}
        onChange={e => setPosOperatorio(e.target.value)}
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
                value={discente}
                onChange={e=> setDiscente(e.target.value)}
              />
            </th>
            <th>
              <input 
                type="text"
                value={docente}
                onChange={e=> setDocente(e.target.value)}
              />
            </th>
            <th>
              <input 
                type="date"
                value={data}
                onChange={e=> setData(e.target.value)}
              />
            </th>
          </tr>
        </tbody>
      </table>

      <br/><button style={{alignSelf: 'center', width: '150px'}} onClick={enviar}>Enviar</button>

    </div>
  );
}
export default withRouter(PteCirurgiaPlanejamento);