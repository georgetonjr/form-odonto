import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';
import * as options from '../arrays';

const FichaClinicaProfessor = props => {
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

  document.title = 'Ficha Clinica';

  if(form !== null){
  return(
        
    <div>
      <button onClick={back}>Voltar</button><br/>

      {status ?
       aprovado? <h3 style={{color: 'green'}}>Aprovado</h3> : <h3 style={{color: 'red'}}>Reprovado</h3>
       : <h3>Aguardando resposta...</h3>}

      <h1>Ficha Clínica</h1>

      <h2>1. IDENTIFICAÇÃO DO PACIENTE</h2>

      <input
      type="text"
      name="nome"
      label="Nome"
      title="Por favor, digite seu nome completo"
      placeholder="Seu nome completo"
      required
      readOnly
      value={form.nomePaciente}
    /><br/>

    <input
      type="text"
      name="cpf"
      label="CPF"
      title="Por favor, digite um CPF válido"
      placeholder="CPF"
      required
      readOnly
      maxLength="11"
      value={form.cpf}
    /><br/>

    <input
      type="text"
      name="telefone"
      label="Telefone"
      title="Por favor, digite um número de telefone incluindo o DDD, não iniciando em 0 (zero)"
      placeholder="Telefone"
      required
      readOnly
      maxLength="13"
          value={form.telefone}
    /><br/>

    <input
      type="text"
      name="rg"
      label="RG"
      title="Por favor, digite um RG válido"
      placeholder="RG"
      required
      readOnly
      value={form.rg}

    /><br/>

    <input
      name="dataex"
      label="Data de Expedição"
      title="Por favor, digite a data de expedição de seu RG"
      placeholder="Data de expedição"
      required
      readOnly
      maxLength="10"
      value={form.dataexpedicaorg}
    /><br/>

    <select disabled  
      name="Orgão expeditor"  
      value={form.orgaoexpeditor}
      readOnly
    >
      {options.ORGAOS_EXPEDIDORES.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <input
      type="text"
      name="cep"
      label="CEP"
      title="Por favor, digite um CEP válido"
      placeholder="CEP"
      required
      maxLength="8"
      readOnly
      value={form.cep}
    /><br/>

    <input
      type="text"
      name="uf"
      label="UF"
      title="Seu o CEP digitado for válido, seu UF deve aparecer aqui"
      placeholder="UF"
      required
      readOnly
      value={form.uf}
    /><br/>

    <input
      type="text"
      name="cidade"
      label="Cidade"
      title="Seu o CEP digitado for válido, sua cidade deve aparecer aqui"
      placeholder="Cidade"
      required
      readOnly
      value={form.cidade}
    /><br/>

    <input
      type="text"
      name="bairro"
      label="Bairro"
      title="Seu o CEP digitado for válido, seu bairro deve aparecer aqui"
      placeholder="Bairro"
      require
      readOnly
      value={form.bairro}
    /><br/>

    <input
      type="text"
      name="endereco"
      label="Endereço"
      title="Seu o CEP digitado for válido, seu endereço deve aparecer aqui"
      placeholder="Endereço"
      require
      readOnly
      value={form.endereco}
    /><br/>

    <input
      type="text"
      name="num"
      label="Número"
      title="Por favor, digite o número de sua casa/apartamento"
      placeholder="Número"
      required
      readOnly
        value={form.numero}
    /><br/>

    <input
      type="text"
      name="complemento"
      label="Complemento"
      title="Por favor, digite o complemento de seu endereço, se houver"
      placeholder="Complemento"
        value={form.complemento}
        readOnly
    /><br/>

    <select disabled 
      name="Nacionalidades" 
        value={form.nacionalidades}
        readOnly
    >
      {options.NACIONALIDADES.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <input
      type="text"
      name="profissao"
      label="Profissão"
      title="Digite sua profissão atual"
      placeholder="Sua profissão atual"
      readOnly
      required
        value={form.profissao}
    /><br/>

    <input
      type="text"
      name="mae"
      label="Mãe"
      title="Por favor, digite o nome completo de sua mãe"
      placeholder="Nome completo de sua mãe"
      required
      readOnly
        value={form.nomeMae}
    /><br/>

    <input
      type="text"
      name="pai"
      label="Pai"
      readOnly
      title="Por favor, digite o nome completo de seu pai"
      placeholder="Nome completo de seu pai"
        value={form.nomePai}
    /><br/>

    <label>Estado Civil</label><br/>
    <select disabled 
      name="EstadoCivil"
      readOnly
        value={form.estadoCivil}
    >
      <option value="solteiro">Solteiro</option>
      <option value="Casado">Casado</option>
      <option value="Divorciado">Divorciado</option>
      <option value="Viuvo">Viuvo</option>
    </select>
    <br/>

    <h2>2. Dados Sócio-Econômicos</h2>

    <label>Nivel de escolaridade</label><br/>
    <select disabled 
      name="Escolaridade" 
        value={form.nivelEscolaridade}
        readOnly
    >
      {options.ESCOLARIDADE.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <label>Atividade remunerada</label><br/>
    <select disabled 
      name="atividade remunerada"
        value={form.atividadeRemunerada}
        readOnly
    >
      <option value="Sim">Sim</option>
      <option value="autônomo">autônomo</option>
      <option value="CLT">CLT</option>
      <option value="Celetista">Celetista</option>
      <option value="Não">Não</option>
      <option value="Outra">Outra</option>
    </select>

    {form.atividadeRemunerada ==='Outra' ? 
      <input 
        type="text" 
        name="Outra" 
        readOnly
        placeholder="Outra"
          value={form.outraAtividade}
      /> 
      : 
      <></>
    }
    <br/>

    <label>Auxilio do governo</label><br/>
    <select disabled 
      name="auxilio do governo"
      readOnly
        value={form.auxilioGoverno}

    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>
    {form.auxilioGoverno === 'Sim' ?
        <input readOnly  
          type="text" 
          placeholder='Valor'
            value={form.auxilioValor} 
        />
      :
        <> </>
    }
    <br/>

    <label>Outro membro da familia trabalha</label><br/>
    <select disabled readOnly  
      name="outro membro da familia trabalha" 
        value={form.outroMembroFamiliaTrabalha}
    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {form.outroMembroFamiliaTrabalha === 'Sim' ? 
      <input readOnly  
        type="text" 
        placeholder="Quem" 
          value={form.outroMembroTrabalhaQuem}
      />
    :
      <></>
    }
    <br/>

    <label>Renda Familiar</label> <br/>
    <input readOnly  
      type="text" 
      name="rendafamilia" 
      placeholder="Renda familiar" 
        value={form.rendaFamiliar}
    /><br/>

    <label>Possui veiculo proprio</label><br/>
    <select disabled readOnly  
      name="possui veiculo"
        value={form.veiculo}>
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {form.veiculo ==='Sim' ? 
      <input readOnly  
        type="text" 
        name="quantosveiculos" 
        placeholder="Quantos veiculos" 
          value={form.quantosVeiculos}
      /> 
      : 
      <></>
    }
    <br/>

    <label>Residencia</label><br/>
    <select disabled readOnly  
      name="residencia" 
        value={form.residencia}
    >
      <option value="Propria">Sim</option>
      <option value="Alugada">Alugada</option>
      <option value="Outra">Outra</option>
    </select><br/>

    <label>Número de comodos</label><br/>
    <input readOnly  
      type="text" 
      placeholder="Número de comodos"
        value={form.numeroDeComodos}
    />
    <br/>

    <label>Número de banheiros</label><br/>
    <input readOnly  
      type="text" 
      placeholder="Número de banheiros"
        value={form.numeroDeBanheiros}

    /><br/>

    <label>Tipo de transporte publico</label><br/>
    <select disabled readOnly  
      name="Tipo de transporte publico" 
        value={form.tranportePulico}
    >
      <option value="Onibus">Onibus</option>
      <option value="Metro">Metrô</option>
      <option value="Outro">Outro</option>
    </select>
    {form.tranportePulico === 'Outro' ? 
      <input readOnly  
        type="text"
        placeholder="Qual transporte"
          value={form.tranportePublicoOutro}   
      />
    :
    <></>
    }
    <br/>

    <h2>3. EXAME CLÍNICO</h2>
    <h3>3.1. ANAMNESE</h3>

    <label>Queixa principal</label><br/>
    <input readOnly  
      type="text" 
      name="queixa principal" 
      placeholder ="Queixa principal"
        value={form.queixaPrincipal}
    /><br/>

    <label>História da doença atual</label><br/>
    <input readOnly  
      type="text" 
      name="historico da doença atual" 
      placeholder ="Historico da doença atual"
        value={form.historicoDeDoencaAtual}
    /><br/>

    <label>Antecedentes familiares</label><br/>
    <input readOnly  
      type="text" 
      name="antecedentes familiares" 
      placeholder ="Antecendentes familiares"
        value={form.antecedentesFamiliares}
    /><br/>


    <table border="1">
      <caption>Questionário de saúde</caption>
      
      <thead>
        <tr>
          <th rowSpan="3">Questionário de saúde</th>
          <th rowspan="2">Data</th>
          <th colspan="2">Datas das atualizações</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td rowspan="2"> </td>
          <td><input readOnly  type="date"   value={form.questionarioSaudeData01}/></td>
          <td><input readOnly  type="date"   value={form.questionarioSaudeData02}/></td>
          <td><input readOnly  type="date"   value={form.questionarioSaudeData03}/></td>
        </tr>
    
        <tr>
          <td>
            <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>

          <td>
          <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>

          <td>
          <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>
        </tr>

        <tr>
          <td>Está sob tratamento médico?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoMedico01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoMedico02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoMedico03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está tomando algum medicamento? <input readOnly  type="text" placeholder="Qual"   value={form.tomaAlgumaMedicacaoQual}
            /> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tomaAlgumaMedicacao01}
              
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tomaAlgumaMedicacao02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tomaAlgumaMedicacao03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem  história  de  alergia?  <input readOnly  type="text" placeholder="Qual"   value={form.historicoDeAlergiaQual}
              /> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.historicoDeAlergia01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.historicoDeAlergia02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.historicoDeAlergia03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve problemas respiratórios?   <input readOnly  type="text" placeholder="Asma, Enfizema"   value={form.problemasRespiratorios01Qual}/> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemasRespiratorios01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemasRespiratorios02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemasRespiratorios03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença articular? <input readOnly  type="text" placeholder="Arttrite, Febre reumática."   value={form.doencaArticular01Qual} /> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaArticular01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaArticular02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaArticular03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve distúrbio sanguíneo? <input readOnly  type="text" placeholder="Anemia, Hemorragia. "   value={form.disturbioSanguineo01Qual}/> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.disturbioSanguineo01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.disturbioSanguineo02}

            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.disturbioSanguineo03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento radioterápico de tumor?  <input readOnly  type="text" placeholder="Qual? "   value={form.tratamentoRadioterapicoDeTumor01Qual}/> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoRadioterapicoDeTumor01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoRadioterapicoDeTumor02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoRadioterapicoDeTumor03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento quimioterápico de tumor?   <input readOnly  type="text" placeholder="Qual? "   value={form.tratamentoQuimioterapicoDeTumor01Qual}
              /> </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoQuimioterapicoDeTumor01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoQuimioterapicoDeTumor02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.tratamentoQuimioterapicoDeTumor03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem diabetes? </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temDiabetes01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temDiabetes02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temDiabetes03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve hepatite? <input readOnly  type="text" placeholder="Se sim qual? A, B ou C?"   value={form.temHepatite01Qual}
              /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temHepatite01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temHepatite02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temHepatite03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tomou vacina contra Hepatite B?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.vacinaContraHepatite01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.vacinaContraHepatite02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.vacinaContraHepatite03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema renal?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaRenal01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaRenal02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaRenal03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alteração hormonal? <input readOnly  type="text" placeholder="Se sim qual? Tireóide, Suprarenal?"   value={form.alteracaoHormonal01Qual}
            /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.alteracaoHormonal01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.alteracaoHormonal02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.alteracaoHormonal03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema hepático?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaHepatico01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaHepatico02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaHepatico03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem problema estomacal? <input readOnly  type="text" placeholder="Se sim qual? Gastrite, Úlcera?"   value={form.problemaEstomacal01Qual}
               /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaEstomacal01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaEstomacal02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.problemaEstomacal03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem sífilis ou outra DST? </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temSifilisOuOutraDST01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temSifilisOuOutraDST02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temSifilisOuOutraDST03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem herpes ou aftas frequentes?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.herpesOuAftas01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.herpesOuAftas02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.herpesOuAftas03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>É HIV positivo? </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.hivPositivo01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.hivPositivo02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.hivPositivo03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alguma síndrome ou comprometimento mental?<input readOnly  type="text" placeholder="Se sim qual?"   value={form.algumaSindromeOuComprometimentoMental01Qual}
            /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.algumaSindromeOuComprometimentoMental01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.algumaSindromeOuComprometimentoMental02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.algumaSindromeOuComprometimentoMental03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem eplepsia?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temEplepsia01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temEplepsia02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.temEplepsia03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Fez ou faz tratamento psiquiátrico? </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.fazTratamentoPsiquiatrico01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.fazTratamentoPsiquiatrico02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.fazTratamentoPsiquiatrico03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já se submeteu à cirurgia? <input readOnly  type="text" placeholder="Se sim qual?"   value={form.jaSeSubmeteuACirugia01Qual}
              /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.jaSeSubmeteuACirugia01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.jaSeSubmeteuACirugia02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.jaSeSubmeteuACirugia03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já recebeu transfusão de sangue?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.transfusaoDeSangue01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.transfusaoDeSangue02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.transfusaoDeSangue03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem dores de cabeça frequentes? </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doresDeCabecaFrequentes01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doresDeCabecaFrequentes02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doresDeCabecaFrequentes03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem cicatrização lenta?</td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.cicatrizacaoLenta01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.cicatrizacaoLenta02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.cicatrizacaoLenta03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está ou poderia estar grávida ou amamentado? <input readOnly  type="text" placeholder="Período?"   value={form.gravidaOuAmamentando01Qual}
              /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.gravidaOuAmamentando01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.gravidaOuAmamentando02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.gravidaOuAmamentando03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença cardiovascular?  <input readOnly  type="text" placeholder="Se sim qual? Hipertensão arterial, Infarto." style={{width: 250}}   value={form.doencaCardiovascular01Qual}
              /></td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaCardiovascular01}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaCardiovascular02}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select disabled readOnly  
              name="tratamentomedico" 
                value={form.doencaCardiovascular03}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Pressão arterial</td>
          <td>
            <input readOnly  
              type="text"   
              placeholder="180" 
              style={{width: 40}}
                value={form.pressaoArterial01}
              />mmHg</td>
          <td>
            <input readOnly  
              type="text"   
              placeholder="180" 
              style={{width: 40}}
                value={form.pressaoArterial02}
              />mmHg</td>
          <td>
            <input readOnly  
              type="text"   
              placeholder="180" 
              style={{width: 40}}
                value={form.pressaoArterial03}
              />mmHg</td>
        </tr>

        <tr>
          <td>Informações relevantes sobre alguma condição de saúde: <textarea readOnly   value={form.condicoesDeSaude} name="" id="" cols="30" rows="1"></textarea></td>
        </tr>

        <tr>
          <td>Possui alguma doença que não foi perguntada?  
            <select disabled readOnly  
              name="Doenças" 
                value={form.doencNaoPergutadas}  
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
            {form.doencNaoPergutadas ==='Sim' ? 
              <input readOnly  
                type="text" 
                name="doecasNaoPergutadas" 
                placeholder="Qual doença" 
                  value={form.doencasNaoPerguntadas}
              /> : <></>}
          </td>
        </tr>

        <tr>
          Faz uso de álcool?
          <select disabled readOnly  name="Doenças"   value={form.usodealcool}>
            <option value="Não">Não</option>
            <option value="diariamente">Diariamente</option>
            <option value="3vezesporsemana">3 dias por semana</option>
            <option value="socialmente">Socialmente</option>
          </select>
        </tr>

        <tr>
          Faz uso de fumo?
          <select disabled readOnly  name="Doenças"   value={form.fumo}  >
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form.fumo ==='Sim' || form.fumo === 'socialmente' ? 
            <> 
            {form.fumo ==='Sim' ?
              <>
                <input readOnly  
                  type="text" 
                  name="vezespdia" 
                  placeholder="Quantos cigarros por dia?" 
                    value={form.cigarrosPorDia}
                />

                <input readOnly  
                  type="text" 
                  name="fumo" 
                  placeholder="Qual?" 
                    value={form.qualCigarro}
                />
              </>
            :
              <input readOnly  
                type="text" 
                name="fumo" 
                placeholder="Qual?" 
                  value={form.qualCigarro}
              />
            }
              </> 
            : 
            <></>}
        </tr>

        <tr>
          Faz uso de droga ilícitas?
          <select disabled readOnly  name="Doenças"   value={form.drogailicitas} >
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form.drogailicitas ==='Sim' || form.drogailicitas === 'socialmente' ? 
            <input readOnly  
              type="text" 
              name="fumo" 
              placeholder="Qual?" 
                value={form.qualDrogaIlicita}
            /> : <></>}
        </tr>

        <tr>
          Outros habitos: <input readOnly  type="text" placeholder="Quais?" style={{width: 400}}   value={form.quaisHabitos} />
        </tr>

        <tr>
          Observações: <input readOnly  type="text" placeholder="Observações?" style={{width: 400}}   value={form.QSObservacoes} />
        </tr>

        <tr>
         <b>Declaro que as informações relatadas na anamnese são verdadeiras e me comprometo a informar ao responsável pelo meu atendimento qualquer alteração do estado de saúde que ocorra durante o meu tratamento.
        Brasília,<input readOnly  type="date"   value={form.anamneseData} />.<br/>	Paciente ou responsável legal: <input readOnly  type="text" placeholder="Nome do responsavel" style={{width: 400}}   value={form.responsavelNome}/>.</b>
        </tr>

        <tr>
        Nome do discente: <input readOnly  type="text" placeholder="Nome do discente" style={{width: 400}}   value={form.discenteNome} />. <br/> 
        CPD: <input readOnly  type="text" placeholder="00000" style={{width: 200}}   value={form.CPD} />. 
        Data: <input readOnly  type="date"   value={form.dData} />.
        </tr>

        <tr>
          1. Autorizo o início do exame físico do paciente, inclusive procedimentos invasivos, como sondagem periodontal.
          Docente: <input readOnly  type="text" placeholder="Docente" style={{width: 400}}   value={form.docenteNome1} />. <br/>
          Data: <input readOnly  type="date"   value={form.docenteData1} />.
        </tr>

        <tr>
          2.	Não autorizo o início do exame físico do paciente, orientei o discente a preencher o Pedido de Avaliação Médica.
          Docente: <input readOnly  type="text" placeholder="Docente" style={{width: 400}}   value={form.docenteNome2} />. <br/>
          Data: <input readOnly  type="date"   value={form.docenteData2} />.
        </tr>

        <tr>
          3.	Após avaliação do Pedido de Avaliação Médica, autorizo o início do exame físico do paciente.
          Docente: <input readOnly  type="text" placeholder="Docente" style={{width: 400}}   value={form.docenteNome3} />. <br/>
          Data: <input readOnly  type="date"   value={form.docenteData3} />.
        </tr>
      </tbody>
    </table>
    
    <h3>3.2. História Odontologia</h3>

    <table border="1">
      <tbody>
        <tr>
          <th>
            Realizou tratamento odontológico anteriormente?
            <select disabled readOnly  
                value={form.realizouTratOdontoAnterior}
              >
                <option value="NAO">Não</option>
                <option value="SIM">Sim</option>
              </select>
          </th>

          <th>
            Há quanto tempo foi o último tratamento odontológico?
            <input readOnly  type="text" 
                value={form.tempoUtimoTrata}
            />
          </th>

        </tr>

        <tr>
          Relata alguma experiência desagradável durante tratamento odontológico anterior?
          <select disabled readOnly  
              value={form.expDesagradavelDuranteTratamento}
          >
            <option value="NAO">Não</option>
            <option value="SIM">Sim</option>
          </select>
          {form.expDesagradavelDuranteTratamento === 'SIM' ?
            <input readOnly  
              type="text" 
                value={form.expDesagradavelDuranteTratamentQual} 
              placeholder="Qual?"  
            /> 
            : <></>}
        </tr>

        <tr>
          <th>
            Já recebeu anestesia odontologia?
            <select disabled readOnly  
                value={form.recebeuAnestesia}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
          </th>

          <th>
            Já teve alguma reação ao uso de anestésico?
            <select disabled readOnly  
                value={form.alergiaAnestesia}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.alergiaAnestesia === 'SIM' ?
            <input readOnly  
              type="text" 
                value={form.alergiaAnestesiaQual} 
              placeholder="Qual?"  
            /> 
            : <></>}
          </th>
        </tr>

        <tr>
          <th>
            Faz uso de prótese dentária?
            <select disabled readOnly  
                value={form.usoProteseDentaria}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.usoProteseDentaria === 'SIM' ?
            <input readOnly  
              type="text" 
                value={form.usoProteseDentariaQual} 
              placeholder="Qual?"  
            /> 
            : <></>} 
          </th>

          <th>
            Percebe sangramento na gengiva?
            <select disabled readOnly  
                value={form.sangramentoGengiva}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.sangramentoGengiva === 'SIM' ?
              <select disabled readOnly  
                  value={form.sangramentoGengivaQuando}
              >
                <option value="Durante uso de fio dental">Durante uso de fio dental</option>
                <option value="Durante escovacao">Durante escovação</option>
                <option value="Espontaneamente">Espontaneamente</option>
              </select>
            : <></>} 

          </th>

        </tr>

        <tr>
          <th>
            Escova os dentes sozinho?
            <select disabled readOnly  
                value={form.escovaDentesSozinho}  
            >
              <option value="">Selecione</option>
              <option value="SIM">Sim</option>
              <option value="NAO">Nao (Pessoa ou cuidador)</option>
            </select>
          </th>

          <th colSpan="2">
            <th>
              Faz uso de creme dental? 
              <select disabled readOnly  
                  value={form.usoCremeDental}
              >
                <option value="">Selecione</option>
                <option value="SIM">Sim</option>
                <option value="NAO">Não</option>
              </select> 
            </th>
            
            <th>
              Faz uso de enxaguatório dental?		
              <select disabled readOnly  
                  value={form.enxaguatorioDental}
              >
                <option value="">Selecione</option>
                <option value="SIM">Sim</option>
                <option value="NAO">Não</option>
              </select>
            </th>

          </th>
        </tr>

        <tr>
          <th>
            Frequência de escovação detal:
            <select disabled readOnly  
                value={form.frequenciaEscovacao} 
            >
              <option value="">Selecione</option>
              <option value="NENHUMA VEZ AO DIA">Nenhuma vez ao dia</option>
              <option value="2 VEZES AO DIA">2 vezes ao dia</option>
              <option value="1 VEZ AO DIA">1 vez ao dia</option>
              <option value="3 VEZES OU MAIS">3 ou mais vezes ao dia</option>
            </select>
          </th>

          <th>
            Frequencia de uso de fio dental:
            <select disabled readOnly  
                value={form.frequenciaFioDental} 
            >
              <option value="">Selecione</option>
              <option value="RARAMENTE">Raramente</option>
              <option value="2 OU MAIS VEZES">2 ou mais vezes ao dia</option>
              <option value="1 VEZ AO DIA">1 vez ao dia</option>
              <option value="1 VEZ POR SEMANA"> 1 vez por semana</option>
              <option value="QUANDO SENTE INCOMODO">Quando sente incômodo</option>
            </select>
          </th>
        </tr>

        <tr colSpan="4">
            <th>
              <th>
                Respira normalmente pelo nariz?
                <select disabled readOnly  
                    value={form.repiraNormalmentePeloNariz} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem apneia(ronco)?
                <select disabled readOnly  
                    value={form.temApneia} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>

            <th>
              <th>
                Acorda com falta de ar?
                <select disabled readOnly  
                    value={form.acordaComFaltaAr} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem impactação alimentar?
                <select disabled readOnly  
                    value={form.impactoAlimentar} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>
        </tr>

        <tr colSpan="3">
            <th>
              <th>
                Range os dentes?
                <select disabled readOnly  
                    value={form.rangeOsDentes} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="DURANTE O DIA">Durante o dia</option>
                  <option value="DURANTE A NOITE">Durante a noite</option>
                </select>
              </th>
              <th>
                Sente dores na ATM?
                <select disabled readOnly  
                    value={form.doresNaATM} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>

            <th>
              <th>
                Tem estalo na mandigula?
                <select disabled readOnly  
                    value={form.estaloNaMandigula} 
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>
        </tr>
      </tbody>
    </table>

    <h3>3.3. Exame físico</h3>

    <table border="1">
      <tbody>
        <tr>
          <th>
            Pressão arterial
            <input readOnly   
              type="text" 
              placeholder="__/__ mmHg" 
                value={form.pressaoArterial} 
            />  
          </th>
          <th>
            Pulso radical
            <input readOnly   
              type="text" 
              placeholder="_____/minuto" 
                value={form.pulsoRadical} 
            /> 
          </th>
          <th>
            Frequência respiratório
            <input readOnly   
              type="text" 
              placeholder="____/minuto" 
                value={form.frequenciaRespiratoria} 
            /> 
          </th>
          <th>
            Temperatura
            <input readOnly   
              type="text" 
              placeholder=" __ ºC" 
                value={form.temperatura} 
            /> 
          </th>
        </tr>

        <tr >
          <th>
            Altura: <input readOnly  type="text"   value={form.Altura}  />
          </th>
          <th></th>
          <th>
            Peso: <input readOnly  type="text"   value={form.peso}  />
          </th>
        </tr>

        <tr>
          <th>ATM <input readOnly  type="text"   value={form.ATM}  /></th>
          <th>Linfonodos<input readOnly  type="text"   value={form.linfonodos}  /></th>
          <th>Pele<input readOnly  type="text"   value={form.pele}  /></th>
        </tr>

        <tr>
          <th>Simetria facial <input readOnly  type="text"   value={form.simetriaFacial}  /></th>
          <th>Lábios <input readOnly  type="text"   value={form.labios} /></th>
          <th>Glândulas <input readOnly  type="text"   value={form.glandulas}  /></th>
        </tr>

        <tr>
          <th>Mucosa Labial <input readOnly  type="text"   value={form.mucosaLabial} /></th>
          <th>Mucosa jugal <input readOnly  type="text"   value={form.mucosaJugal} /></th>
          <th>Região retromolar <input readOnly  type="text"   value={form.regiaoRetromolar} /></th>
          <th>Gengiva <input readOnly  type="text"   value={form.gengiva} /></th>
        </tr>

        <tr>
          <th>Palato <input readOnly  type="text"   value={form.palato} /></th>
          <th>Língua <input readOnly  type="text"   value={form.lingua} /></th>
          <th>Assoalho <input readOnly  type="text"   value={form.assoalho}  /></th>
          <th>Orofaringe <input readOnly  type="text"   value={form.orofaringe}  /></th>
        </tr>

        <tr>
          Descrição da lesão: <input readOnly  type="text"   value={form.descriLesao}  />
        </tr>

        <tr>
          Hipóteses diagnósticas: <input readOnly  type="text"   value={form.hipotDiagnosticas}  />
        </tr>
        
      </tbody>

    </table>

    <h3>3.4. Exames Complementares</h3>

    <table border="1">
      <tr>
        <th>
          Radiográficos: <input readOnly  type="text"   value={form.radiograficos}  />
        </th>
      </tr>

      <tr>
        <th>
          Anatomopatológicos: <input readOnly  type="text"   value={form.anatomopatologicos}  />
        </th>
      </tr>

      <tr>
        <th>
          Clínico-laboratoriais: <input readOnly  type="text"   value={form.clinicoLaboratoriais}  />
        </th>
      </tr>
    </table>

    <h3>3.5. Avaliação do controle de biofilme</h3>

    <table border="1">
      <tbody>

        <tr>
          <th>
            data: <input readOnly  type="date"   value={form.ACB1Data} />
          </th>

          <th>
            16(V) <input readOnly  type="text"   value={form.ACB116V} />
            46(L) <input readOnly  type="text"   value={form.ACB146L} />
          </th>

          <th>
            11(V) <input readOnly  type="text"   value={form.ACB111V} />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB131L} />
          </th>

          <th>
            26(V) <input readOnly  type="text"   value={form.ACB126V} />
            &nbsp;36(L) <input readOnly  type="text"   value={form.ACB136L} />
          </th>

          <th>
            IHOS <input readOnly  type="text"   value={form.ACB1IHOS} />
          </th>
        </tr>
          {/* //////1 */}
        <tr>
          <th>
            data: <input readOnly  type="date"   value={form.ACB2Data} />
          </th>

          <th>
          16(V) <input readOnly  type="text"   value={form.ACB216V}  />
            &nbsp;46(L) <input readOnly  type="text"   value={form.ACB243L}  />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB211V}  />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB231L}  />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB211V}  />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB231L}  />
          </th>
          <th>
            IHOS <input readOnly  type="text"   value={form.ACB2IHOS}  />
          </th>
        </tr>
              {/* //////2 */}
        <tr>
          <th>
            data: <input readOnly  type="date"   value={form.ACB3Data}/>
          </th>

          <th>
          16(V) <input readOnly  type="text"   value={form.ACB316V} />
            &nbsp;46(L) <input readOnly  type="text"   value={form.ACB343L} />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB311V} />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB331L} />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB311V} />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB331L} />
          </th>
          <th>
            IHOS <input readOnly  type="text"   value={form.ACB3IHOS} />
          </th>
        </tr>
            {/* //////3 */}
        <tr>
          <th>
            data: <input readOnly  type="date"   value={form.ACB4Data} />
          </th>

          <th>
          16(V) <input readOnly  type="text"   value={form.ACB416V} />
            &nbsp;46(L) <input readOnly  type="text"   value={form.ACB443L} />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB411V} />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB431L} />
          </th>

          <th>
          11(V) <input readOnly  type="text"   value={form.ACB411V} />
            &nbsp;31(L) <input readOnly  type="text"   value={form.ACB431L} />
          </th>
          <th>
            IHOS <input readOnly  type="text"   value={form.ACB4IHOS} />
          </th>
        </tr>
            {/* //////4 */}
        <tr>
        Observações: <textarea disabled value={form.ACBObservacoes}  cols="26" rows="5"></textarea>
        </tr>

        <tr>
          <th>
            Discente:
            Nome: <input readOnly  type="text"  value={form.ACBNome} />
            CPD: <input readOnly  type="text"  value={form.ACBCPD}  />
          </th>

          <th>
            Visto Docente: <input readOnly  type="text"   value={form.vistDocente}  /> 
          </th>
          <th>
            data <input readOnly  type="date"   value={form.ACBData} />
          </th>
        </tr>
      </tbody>
    </table>

    <table border="1">
      <tr>
        <th>Critérios IHOS</th>
      </tr>

      <tr>
        <th>Ausência de biofilme</th>
        <th> 0</th>
      </tr>

      <tr>
        <th>Presença de biofilme até 1/3 da superficie</th>
        <th> 1</th>
      </tr>

      <tr>
        <th>Presença de biofilme até 2/3 da superficie</th>
        <th> 2</th>
      </tr>

      <tr>
        <th>Presença de biofilme em + de 2/3 da superficie</th>
        <th> 3</th>
      </tr>
    </table>

    <table border="1">
      <tr><th>Interpretação do índice</th></tr>

      <tr>
        <th>Interpretação clinica</th>
        <th>Score</th>
      </tr>

      <tr>
        <th>Bom</th>
        <th>0 - 0,6</th>
      </tr>

      <tr>
        <th>Médio</th>
        <th>0,7 - 1,5</th>
      </tr>

      <tr>
        <th>Fraco</th>
        <th>1,6 - 3,0</th>
      </tr>
    </table>

    <h3>3.6. Odondograma</h3>
   
    <img 
      src={form.odontograma}
      alt="Preencher no papel e anexar"
      style={{width: '60%', height: '300px' }}
    /><br/>
    

    <h3>4. Necessidade de tratamento</h3>

    <table border="1">
      <tr>
      <input readOnly  type="checkbox" name="PERIODONTIA"    value={form.periodontiaCheckBox} />
      <label htmlFor="PERIODONTIA">Periodontia</label>

      <input readOnly  type="checkbox" name="ENDODONTIA"   value={form.endodontiaCheckBox} />
      <label htmlFor="ENDODONTIA">ENDODONTIA</label>

      <input readOnly  type="checkbox" name="DENTISTICA"   value={form.dentisticaCheckBox} />
      <label htmlFor="DENTISTICA">DENTÍSTICA</label>

      <input readOnly  type="checkbox" name="CIRURGIA"   value={form.cirurgiaCheckBox}  />
      <label htmlFor="CIRURGIA">CIRURGIA</label>

      <input readOnly  type="checkbox" name="PROTESE FIXA"   value={form.proteseFixaCheckBox}  />
      <label htmlFor="PROTESE FIXA">PRÓTESE FIXA</label>

      <input readOnly  type="checkbox" name="PROTESE PARCIAL REMOVIVEL"   value={form.proteseParcialRemovivelCheckBox}  />
      <label htmlFor="PROTESE PARCIAL REMOVIVEL">PRÓTESE PARCIAL REMOVÍVEL</label>

      <input readOnly  type="checkbox" name="PROTESE TOTAL REMOVIVEL"   value={form.proteseTotalRemovivelCheckBox} />
      <label htmlFor="PROTESE TOTAL REMOVIVEL">PRÓTESE TOTAL REMOVÍVEL</label>

      </tr>

      <tr>
          <th>
            Discente: &nbsp;&nbsp;&nbsp;
            Nome: <input readOnly  type="text"  value={form.NTNome}  />
            CPD: <input readOnly  type="text"  value={form.NTCPD} />
          </th>

          <th>
            Visto Docente: <input readOnly  type="text"   value={form.NTVistDocente} /> 
          </th>
          <th>
            data <input readOnly  type="date"   value={form.NTData}  />
          </th>
        </tr>

        <tr>
          Observações: <textarea 
            cols="25" 
            rows="1"
            disabled
            value={form.NTObservacoes}
          ></textarea>
        </tr>
    </table>
    <h4>*Para a triagem</h4>
    <table border="1">
      <tr>
        <th>Docente <input readOnly    type="text"   value={form.PTDocente} /></th>
        <th>Pontuação <input readOnly  type="text"   value={form.PTPontuacao} /></th>
        <th>Data <input readOnly     type="date"   value={form.PTDate} /></th>
      </tr>
    </table>
    <label style={{alignSelf: 'center'}}>Observações</label> <br/>
    <textarea value={obs}  disabled={status ? true : false} cols="70" rows="10"></textarea><br/>
    </div>
  );
  } else{
    return (<h1>Carregando...</h1>);
  }
};
export default withRouter(FichaClinicaProfessor);