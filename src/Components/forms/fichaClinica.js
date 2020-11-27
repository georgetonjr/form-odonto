import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import * as options from '../arrays';

const FichaClinica = props => {
  document.title = 'Ficha Clinica';
  const [check, setCheck] = useState(true)

  const [form, setForm] = useState({
    veiculo: "",
    doencNaoPergutadas: "",
    fumo: "",
    drogailicitas: "",
    usodealcool: "",
    nomePaciente: "",
    odontograma: "https://res.cloudinary.com/dtycv9fro/image/upload/v1606433665/odonto_on2gac.png"

  });

  const enviar = async() => {
    alert('Enviado com sucesso')
  }

  const upload = async e =>{
    if(check === false){
      return;
    }else{
    const files = e.target.files;
    const data = new FormData()
    data.append('file', files[0]);
    data.append('upload_preset', 'z2aj0lf6');
    
    await fetch('https://api.cloudinary.com/v1_1/dtycv9fro/image/upload' ,{
        method: 'POST',
        body: data
      }).then(resp => {
        resp.json().then(r => {
          setForm({ odontograma: r.secure_url })
          setCheck(false)
        }) 
      })
    }
  }

  return (
    <div>
      <h1>Ficha Clínica</h1>

      <h2>1. IDENTIFICAÇÃO DO PACIENTE</h2>

      <input
      type="text"
      name="nome"
      label="Nome"
      title="Por favor, digite seu nome completo"
      placeholder="Seu nome completo"
      required
      value={form.nomePaciente}
      onChange={e => setForm({ nomePaciente: e.target.value })}
    /><br/>

    <input
      type="text"
      name="cpf"
      label="CPF"
      title="Por favor, digite um CPF válido"
      placeholder="CPF"
      required
      maxLength="11"
      value={form.cpf}
      onChange={e => setForm({ cpf: e.target.value })}
    /><br/>

    <input
      type="text"
      name="telefone"
      label="Telefone"
      title="Por favor, digite um número de telefone incluindo o DDD, não iniciando em 0 (zero)"
      placeholder="Telefone"
      required
      maxLength="13"
      value={form.telefone}
      onChange={e => setForm({ telefone: e.target.value })}
    /><br/>

    <input
      type="text"
      name="rg"
      label="RG"
      title="Por favor, digite um RG válido"
      placeholder="RG"
      required
      value={form.rg}
      onChange={e => setForm({ rg: e.target.value })}
    /><br/>

    <input
      name="dataex"
      label="Data de Expedição"
      title="Por favor, digite a data de expedição de seu RG"
      placeholder="Data de expedição"
      required
      maxLength="10"
      value={form.dataexpedicaorg}
      onChange={e => setForm({ dataexpedicaorg: e.target.value })}
    /><br/>

    <select 
      name="Orgão expeditor"  
      value={form.orgaoexpeditor}
      onChange={e => setForm({ orgaoexpeditor: e.target.value })}
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
      value={form.cep}
      onChange={e => setForm({ cep: e.target.value })}
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
      onChange={e => setForm({ uf: e.target.value })}
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
      onChange={e => setForm({ cidade: e.target.value })}
    /><br/>

    <input
      type="text"
      name="bairro"
      label="Bairro"
      title="Seu o CEP digitado for válido, seu bairro deve aparecer aqui"
      placeholder="Bairro"
      required
      readOnly
      value={form.bairro}
      onChange={e => setForm({ bairro: e.target.value })}
    /><br/>

    <input
      type="text"
      name="endereco"
      label="Endereço"
      title="Seu o CEP digitado for válido, seu endereço deve aparecer aqui"
      placeholder="Endereço"
      required
      readOnly
      value={form.endereco}
      onChange={e => setForm({ endereco: e.target.value })}
    /><br/>

    <input
      type="text"
      name="num"
      label="Número"
      title="Por favor, digite o número de sua casa/apartamento"
      placeholder="Número"
      required
      value={form.numero}
      onChange={e => setForm({ numero: e.target.value })}
    /><br/>

    <input
      type="text"
      name="complemento"
      label="Complemento"
      title="Por favor, digite o complemento de seu endereço, se houver"
      placeholder="Complemento"
      value={form.complemento}
      onChange={e => setForm({ complemento: e.target.value })}
    /><br/>

    <select 
      name="Nacionalidades" 
      value={form.nacionalidades}
      onChange={e => setForm({ nacionalidades: e.target.value })}
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
      required
      value={form.profissao}
      onChange={e => setForm({ profissao: e.target.value })}
    /><br/>

    <input
      type="text"
      name="mae"
      label="Mãe"
      title="Por favor, digite o nome completo de sua mãe"
      placeholder="Nome completo de sua mãe"
      required
      value={form.nomeMae}
      onChange={e => setForm({ nomeMae: e.target.value })}
    /><br/>

    <input
      type="text"
      name="pai"
      label="Pai"
      title="Por favor, digite o nome completo de seu pai"
      placeholder="Nome completo de seu pai"
      value={form.nomePai}
      onChange={e => setForm({ nomePai: e.target.value })}
    /><br/>

    <label>Estado Civil</label><br/>
    <select 
      name="EstadoCivil"
      value={form.estadoCivil}
      onChange={e => setForm({ estadoCivil: e.target.value })}
    >
      <option value="solteiro">Solteiro</option>
      <option value="Casado">Casado</option>
      <option value="Divorciado">Divorciado</option>
      <option value="Viuvo">Viuvo</option>
    </select>
    <br/>

    <h2>2. Dados Sócio-Econômicos</h2>

    <label>Nivel de escolaridade</label><br/>
    <select 
      name="Escolaridade" 
      value={form.nivelEscolaridade}
      onChange={e => setForm({ nivelEscolaridade: e.target.value })}  
    >
      {options.ESCOLARIDADE.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <label>Atividade remunerada</label><br/>
    <select 
      name="atividade remunerada"
      value={form.atividadeRemunerada}
      onChange={e => setForm({ atividadeRemunerada: e.target.value })}  
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
        placeholder="Outra"
        value={form.outraAtividade}
        onChange={e => setForm({ outraAtividade: e.target.value })} 
      /> 
      : 
      <></>
    }
    <br/>

    <label>Auxilio do governo</label><br/>
    <select 
      name="auxilio do governo"
      value={form.auxilioGoverno}
      onChange={e => setForm({ auxilioGoverno: e.target.value })}  
    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>
    {form.auxilioGoverno === 'Sim' ?
        <input 
          type="text" 
          placeholder='Valor'
          value={form.auxilioValor}
          onChange={e => setForm({ auxilioValor: e.target.value })}   
        />
      :
        <> </>
    }
    <br/>

    <label>Outro membro da familia trabalha</label><br/>
    <select 
      name="outro membro da familia trabalha" 
      value={form.outroMembroFamiliaTrabalha}
      onChange={e => setForm({ outroMembroFamiliaTrabalha: e.target.value })}
    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {form.outroMembroFamiliaTrabalha === 'Sim' ? 
      <input 
        type="text" 
        placeholder="Quem" 
        value={form.outroMembroTrabalhaQuem}
        onChange={e => setForm({ outroMembroTrabalhaQuem: e.target.value })} 
      />
    :
      <></>
    }
    <br/>

    <label>Renda Familiar</label> <br/>
    <input 
      type="text" 
      name="rendafamilia" 
      placeholder="Renda familiar" 
      value={form.rendaFamiliar}
      onChange={e => setForm({ rendaFamiliar: e.target.value })} 
    /><br/>

    <label>Possui veiculo proprio</label><br/>
    <select 
      name="possui veiculo"
      value={form.veiculo}
      onChange={e=> setForm({veiculo: e.target.value})}>
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {form.veiculo ==='Sim' ? 
      <input 
        type="text" 
        name="quantosveiculos" 
        placeholder="Quantos veiculos" 
        readOnly
        value={form.quantosVeiculos}
        onChange={e => setForm({ quantosVeiculos: e.target.value })} 
      /> 
      : 
      <></>
    }
    <br/>

    <label>Residencia</label><br/>
    <select 
      name="residencia" 
      value={form.residencia}
      onChange={e => setForm({ residencia: e.target.value })} 
    >
      <option value="Propria">Sim</option>
      <option value="Alugada">Alugada</option>
      <option value="Outra">Outra</option>
    </select><br/>

    <label>Número de comodos</label><br/>
    <input 
      type="text" 
      placeholder="Número de comodos"
      value={form.numeroDeComodos}
      onChange={e => setForm({ numeroDeComodos: e.target.value })} 
    />
    <br/>

    <label>Número de banheiros</label><br/>
    <input 
      type="text" 
      placeholder="Número de banheiros"
      value={form.numeroDeBanheiros}
      onChange={e => setForm({ numeroDeBanheiros: e.target.value })}
    /><br/>

    <label>Tipo de transporte publico</label><br/>
    <select 
      name="Tipo de transporte publico" 
      value={form.tranportePulico}
      onChange={e => setForm({ tranportePulico: e.target.value })}
    >
      <option value="Onibus">Onibus</option>
      <option value="Metro">Metrô</option>
      <option value="Outro">Outro</option>
    </select>
    {form.tranportePulico === 'Outro' ? 
      <input 
        type="text"
        placeholder="Qual transporte"
        value={form.tranportePublicoOutro}
        onChange={e => setForm({ tranportePublicoOutro: e.target.value })}     
      />
    :
    <></>
    }
    <br/>

    <h2>3. EXAME CLÍNICO</h2>
    <h3>3.1. ANAMNESE</h3>

    <label>Queixa principal</label><br/>
    <input 
      type="text" 
      name="queixa principal" 
      placeholder ="Queixa principal"
      value={form.queixaPrincipal}
      onChange={e => setForm({ queixaPrincipal: e.target.value })}
    /><br/>

    <label>História da doença atual</label><br/>
    <input 
      type="text" 
      name="historico da doença atual" 
      placeholder ="Historico da doença atual"
      value={form.historicoDeDoencaAtual}
      onChange={e => setForm({ historicoDeDoencaAtual: e.target.value })}
    /><br/>

    <label>Antecedentes familiares</label><br/>
    <input 
      type="text" 
      name="antecedentes familiares" 
      placeholder ="Antecendentes familiares"
      value={form.antecedentesFamiliares}
      onChange={e => setForm({ antecedentesFamiliares: e.target.value })}
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
          <td><input type="date" value={form.questionarioSaudeData01} onChange={e => setForm({ questionarioSaudeData01: e.target.value })}/></td>
          <td><input type="date" value={form.questionarioSaudeData02} onChange={e => setForm({ questionarioSaudeData02: e.target.value })}/></td>
          <td><input type="date" value={form.questionarioSaudeData03} onChange={e => setForm({ questionarioSaudeData03: e.target.value })}/></td>
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
            <select 
              name="tratamentomedico" 
              value={form.tratamentoMedico01}
              onChange={e => setForm({ tratamentoMedico01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoMedico02}
              onChange={e => setForm({ tratamentoMedico02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoMedico03}
              onChange={e => setForm({ tratamentoMedico03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está tomando algum medicamento? <input type="text" placeholder="Qual"/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tomaAlgumaMedicacao01}
              onChange={e => setForm({ tomaAlgumaMedicacao01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tomaAlgumaMedicacao02}
              onChange={e => setForm({ tomaAlgumaMedicacao02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tomaAlgumaMedicacao03}
              onChange={e => setForm({ tomaAlgumaMedicacao03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem  história  de  alergia?  <input type="text" placeholder="Qual"/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.historicoDeAlergia01}
              onChange={e => setForm({ historicoDeAlergia01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.historicoDeAlergia02}
              onChange={e => setForm({ historicoDeAlergia02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.historicoDeAlergia03}
              onChange={e => setForm({ historicoDeAlergia03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve problemas respiratórios?   <input type="text" placeholder="Asma, Enfizema"/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemasRespiratorios01}
              onChange={e => setForm({ problemasRespiratorios01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemasRespiratorios02}
              onChange={e => setForm({ problemasRespiratorios02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemasRespiratorios03}
              onChange={e => setForm({ problemasRespiratorios03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença articular? <input type="text" placeholder="Arttrite, Febre reumática."/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaArticular01}
              onChange={e => setForm({ doencaArticular01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaArticular02}
              onChange={e => setForm({ doencaArticular02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaArticular03}
              onChange={e => setForm({ doencaArticular03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve distúrbio sanguíneo? <input type="text" placeholder="Anemia, Hemorragia. "/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.disturbioSanguineo01}
              onChange={e => setForm({ disturbioSanguineo01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.disturbioSanguineo02}
              onChange={e => setForm({ disturbioSanguineo02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.disturbioSanguineo03}
              onChange={e => setForm({ disturbioSanguineo03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento radioterápico de tumor?  <input type="text" placeholder="Qual? "/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoRadioterapicoDeTumor01}
              onChange={e => setForm({ tratamentoRadioterapicoDeTumor01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoRadioterapicoDeTumor02}
              onChange={e => setForm({ tratamentoRadioterapicoDeTumor02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoRadioterapicoDeTumor03}
              onChange={e => setForm({ tratamentoRadioterapicoDeTumor03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento quimioterápico de tumor?   <input type="text" placeholder="Qual? "/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoQuimioterapicoDeTumor01}
              onChange={e => setForm({ tratamentoQuimioterapicoDeTumor01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoQuimioterapicoDeTumor02}
              onChange={e => setForm({ tratamentoQuimioterapicoDeTumor02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.tratamentoQuimioterapicoDeTumor03}
              onChange={e => setForm({ tratamentoQuimioterapicoDeTumor03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.temDiabetes01}
              onChange={e => setForm({ temDiabetes01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temDiabetes02}
              onChange={e => setForm({ temDiabetes02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temDiabetes03}
              onChange={e => setForm({ temDiabetes03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve hepatite? <input type="text" placeholder="Se sim qual? A, B ou C?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temHepatite01}
              onChange={e => setForm({ temHepatite01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temHepatite02}
              onChange={e => setForm({ temHepatite02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temHepatite03}
              onChange={e => setForm({ temHepatite03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.vacinaContraHepatite01}
              onChange={e => setForm({ vacinaContraHepatite01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.vacinaContraHepatite02}
              onChange={e => setForm({ vacinaContraHepatite02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.vacinaContraHepatite03}
              onChange={e => setForm({ vacinaContraHepatite03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.problemaRenal01}
              onChange={e => setForm({ problemaRenal01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaRenal02}
              onChange={e => setForm({ problemaRenal02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaRenal03}
              onChange={e => setForm({ problemaRenal03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alteração hormonal? <input type="text" placeholder="Se sim qual? Tireóide, Suprarenal?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.alteracaoHormonal01}
              onChange={e => setForm({ alteracaoHormonal01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.alteracaoHormonal02}
              onChange={e => setForm({ alteracaoHormonal02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.alteracaoHormonal03}
              onChange={e => setForm({ alteracaoHormonal03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.problemaHepatico01}
              onChange={e => setForm({ problemaHepatico01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaHepatico02}
              onChange={e => setForm({ problemaHepatico02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaHepatico03}
              onChange={e => setForm({ problemaHepatico03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem problema estomacal? <input type="text" placeholder="Se sim qual? Gastrite, Úlcera?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaEstomacal01}
              onChange={e => setForm({ problemaEstomacal01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaEstomacal02}
              onChange={e => setForm({ problemaEstomacal02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.problemaEstomacal03}
              onChange={e => setForm({ problemaEstomacal03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.temSifilisOuOutraDST01}
              onChange={e => setForm({ temSifilisOuOutraDST01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temSifilisOuOutraDST02}
              onChange={e => setForm({ temSifilisOuOutraDST02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temSifilisOuOutraDST03}
              onChange={e => setForm({ temSifilisOuOutraDST03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.herpesOuAftas01}
              onChange={e => setForm({ herpesOuAftas01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.herpesOuAftas02}
              onChange={e => setForm({ herpesOuAftas02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.herpesOuAftas03}
              onChange={e => setForm({ herpesOuAftas03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.hivPositivo01}
              onChange={e => setForm({ hivPositivo01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.hivPositivo02}
              onChange={e => setForm({ hivPositivo02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.hivPositivo03}
              onChange={e => setForm({ hivPositivo03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alguma síndrome ou comprometimento mental?<input type="text" placeholder="Se sim qual?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.algumaSindromeOuComprometimentoMental01}
              onChange={e => setForm({ algumaSindromeOuComprometimentoMental01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.algumaSindromeOuComprometimentoMental02}
              onChange={e => setForm({ algumaSindromeOuComprometimentoMental02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.algumaSindromeOuComprometimentoMental03}
              onChange={e => setForm({ algumaSindromeOuComprometimentoMental03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.temEplepsia01}
              onChange={e => setForm({ temEplepsia01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temEplepsia02}
              onChange={e => setForm({ temEplepsia02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.temEplepsia03}
              onChange={e => setForm({ temEplepsia03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.fazTratamentoPsiquiatrico01}
              onChange={e => setForm({ fazTratamentoPsiquiatrico01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.fazTratamentoPsiquiatrico02}
              onChange={e => setForm({ fazTratamentoPsiquiatrico02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.fazTratamentoPsiquiatrico03}
              onChange={e => setForm({ fazTratamentoPsiquiatrico03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já se submeteu à cirurgia? <input type="text" placeholder="Se sim qual?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.jaSeSubmeteuACirugia01}
              onChange={e => setForm({ jaSeSubmeteuACirugia01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.jaSeSubmeteuACirugia02}
              onChange={e => setForm({ jaSeSubmeteuACirugia02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.jaSeSubmeteuACirugia03}
              onChange={e => setForm({ jaSeSubmeteuACirugia03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.transfusaoDeSangue01}
              onChange={e => setForm({ transfusaoDeSangue01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.transfusaoDeSangue02}
              onChange={e => setForm({ transfusaoDeSangue02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.transfusaoDeSangue03}
              onChange={e => setForm({ transfusaoDeSangue03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.doresDeCabecaFrequentes01}
              onChange={e => setForm({ doresDeCabecaFrequentes01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doresDeCabecaFrequentes02}
              onChange={e => setForm({ doresDeCabecaFrequentes02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doresDeCabecaFrequentes03}
              onChange={e => setForm({ doresDeCabecaFrequentes03: e.target.value })}
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
            <select 
              name="tratamentomedico" 
              value={form.cicatrizacaoLenta01}
              onChange={e => setForm({ cicatrizacaoLenta01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.cicatrizacaoLenta02}
              onChange={e => setForm({ cicatrizacaoLenta02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.cicatrizacaoLenta03}
              onChange={e => setForm({ cicatrizacaoLenta03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está ou poderia estar grávida ou amamentado? <input type="text" placeholder="Período?"/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.gravidaOuAmamentando01}
              onChange={e => setForm({ gravidaOuAmamentando01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.gravidaOuAmamentando02}
              onChange={e => setForm({ gravidaOuAmamentando02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.gravidaOuAmamentando03}
              onChange={e => setForm({ gravidaOuAmamentando03: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença cardiovascular?  <input type="text" placeholder="Se sim qual? Hipertensão arterial, Infarto." style={{width: 250}}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaCardiovascular01}
              onChange={e => setForm({ doencaCardiovascular01: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaCardiovascular02}
              onChange={e => setForm({ doencaCardiovascular02: e.target.value })}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={form.doencaCardiovascular03}
              onChange={e => setForm({ doencaCardiovascular03: e.target.value })}
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
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={form.pressaoArterial01}
              onChange={e => setForm({ pressaoArterial01: e.target.value })}
              />mmHg</td>
          <td>
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={form.pressaoArterial02}
              onChange={e => setForm({ pressaoArterial02: e.target.value })}
              />mmHg</td>
          <td>
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={form.pressaoArterial03}
              onChange={e => setForm({ pressaoArterial03: e.target.value })}
              />mmHg</td>
        </tr>

        <tr>
          <td>Informações relevantes sobre alguma condição de saúde: <textarea value={form.condicoesDeSaude} onChange={e => setForm({ condicoesDeSaude: e.target.value })} name="" id="" cols="30" rows="1"></textarea></td>
        </tr>

        <tr>
          <td>Possui alguma doença que não foi perguntada?  
            <select 
              name="Doenças" 
              value={form.doencNaoPergutadas}  
              onChange={e=> setForm({ doencNaoPergutadas: e.target.value })}
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
            {form.doencNaoPergutadas ==='Sim' ? 
              <input 
                type="text" 
                name="doecasNaoPergutadas" 
                placeholder="Qual doença" 
                value={form.doencasNaoPerguntadas}
                onChange={e => setForm({ doencNaoPergutadas: e.target.value })}
              /> : <></>}
          </td>
        </tr>

        <tr>
          Faz uso de álcool?
          <select name="Doenças" value={form.usodealcool}  onChange={e=> setForm({ usodealcool: e.target.value })}>
            <option value="Não">Não</option>
            <option value="diariamente">Diariamente</option>
            <option value="3vezesporsemana">3 dias por semana</option>
            <option value="socialmente">Socialmente</option>
          </select>
        </tr>

        <tr>
          Faz uso de fumo?
          <select name="Doenças" value={form.fumo}  onChange={e=> setForm({ fumo: e.target.value })}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form.fumo ==='Sim' || form.fumo === 'socialmente' ? 
            <> 
            {form.fumo ==='Sim' ?
              <>
                <input 
                  type="text" 
                  name="vezespdia" 
                  placeholder="Quantos cigarros por dia?" 
                  value={form.cigarrosPorDia}
                  onChange={e => setForm({ cigarrosPorDia: e.target.value })}
                />

                <input 
                  type="text" 
                  name="fumo" 
                  placeholder="Qual?" 
                  value={form.qualCigarro}
                  onChange={e => setForm({ qualCigarro: e.target.value })}
                />
              </>
            :
              <input 
                type="text" 
                name="fumo" 
                placeholder="Qual?" 
                value={form.qualCigarro}
                  onChange={e => setForm({ qualCigarro: e.target.value })}
              />
            }
              </> 
            : 
            <></>}
        </tr>

        <tr>
          Faz uso de droga ilícitas?
          <select name="Doenças" value={form.drogailicitas}  onChange={e=> setForm({ drogailicitas: e.target.value })}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form.drogailicitas ==='Sim' || form.drogailicitas === 'socialmente' ? 
            <input 
              type="text" 
              name="fumo" 
              placeholder="Qual?" 
              value={form.qualDrogaIlicita}
              onChange={e => setForm({ qualDrogaIlicita: e.target.value })}
            /> : <></>}
        </tr>

        <tr>
          Outros habitos: <input type="text" placeholder="Quais?" style={{width: 400}} value={form.quaisHabitos} onChange={e => setForm({ quaisHabitos: e.target.value })}/>
        </tr>

        <tr>
          Observações: <input type="text" placeholder="Observações?" style={{width: 400}} value={form.Observacoes} onChange={e => setForm({ Observacoes: e.target.value })}/>
        </tr>

        <tr>
         <b>Declaro que as informações relatadas na anamnese são verdadeiras e me comprometo a informar ao responsável pelo meu atendimento qualquer alteração do estado de saúde que ocorra durante o meu tratamento.
        Brasília,<input type="date" value={form.anamneseData} onChange={e => setForm({ anamneseData: e.target.value })}/>.<br/>	Paciente ou responsável legal: <input type="text" placeholder="Nome do responsavel" style={{width: 400}} value={form.responsavelNome} onChange={e => setForm({ responsavelNome: e.target.value })}/>.</b>
        </tr>

        <tr>
        Nome do discente: <input type="text" placeholder="Nome do discente" style={{width: 400}} value={form.discenteNome} onChange={e => setForm({ discenteNome: e.target.value })}/>. <br/> 
        CPD: <input type="text" placeholder="00000" style={{width: 200}} value={form.CPD} onChange={e => setForm({ CPD: e.target.value })}/>. 
        Data: <input type="date" value={form.dData} onChange={e => setForm({ dData: e.target.value })}/>.
        </tr>

        <tr>
          1. Autorizo o início do exame físico do paciente, inclusive procedimentos invasivos, como sondagem periodontal.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={form.docenteNome1} onChange={e => setForm({ docenteNome1: e.target.value })}/>. <br/>
          Data: <input type="date" value={form.docenteData1} onChange={e => setForm({ docenteData1: e.target.value })}/>.
        </tr>

        <tr>
          2.	Não autorizo o início do exame físico do paciente, orientei o discente a preencher o Pedido de Avaliação Médica.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={form.docenteNome2} onChange={e => setForm({ docenteNome2: e.target.value })}/>. <br/>
          Data: <input type="date" value={form.docenteData2} onChange={e => setForm({ docenteData2: e.target.value })}/>.
        </tr>

        <tr>
          3.	Após avaliação do Pedido de Avaliação Médica, autorizo o início do exame físico do paciente.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={form.docenteNome3} onChange={e => setForm({ docenteNome3: e.target.value })}/>. <br/>
          Data: <input type="date" value={form.docenteData3} onChange={e => setForm({ docenteData3: e.target.value })}/>.
        </tr>
      </tbody>
    </table>
    
    <h3>3.2. História Odontologia</h3>

    <table border="1">
      <tbody>
        <tr>
          <th>
            Realizou tratamento odontológico anteriormente?
            <select 
              value={form.realizouTratOdontoAnterior}
              onChange={e => setForm({ realizouTratOdontoAnterior: e.target.value})}
              >
                <option value="NAO">Não</option>
                <option value="SIM">Sim</option>
              </select>
          </th>

          <th>
            Há quanto tempo foi o último tratamento odontológico?
            <input type="text" 
              value={form.tempoUtimoTrata}
              onChange={e => setForm({ tempoUtimoTrata: e.target.value})}
            />
          </th>

        </tr>

        <tr>
          Relata alguma experiência desagradável durante tratamento odontológico anterior?
          <select 
            value={form.expDesagradavelDuranteTratamento}
            onChange={e => setForm({ expDesagradavelDuranteTratamento: e.target.value})}
          >
            <option value="NAO">Não</option>
            <option value="SIM">Sim</option>
          </select>
          {form.expDesagradavelDuranteTratamento === 'SIM' ?
            <input 
              type="text" 
              value={form.expDesagradavelDuranteTratamentQual} 
              onChange={e=> setForm({ expDesagradavelDuranteTratamentQual: e.target.value})} 
              placeholder="Qual?"  
            /> 
            : <></>}
        </tr>

        <tr>
          <th>
            Já recebeu anestesia odontologia?
            <select 
              value={form.recebeuAnestesia}
              onChange={e => setForm({ recebeuAnestesia: e.target.value})}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
          </th>

          <th>
            Já teve alguma reação ao uso de anestésico?
            <select 
              value={form.alergiaAnestesia}
              onChange={e => setForm({ alergiaAnestesia: e.target.value})}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.alergiaAnestesia === 'SIM' ?
            <input 
              type="text" 
              value={form.alergiaAnestesiaQual} 
              onChange={e=> setForm({ alergiaAnestesiaQual: e.target.value})} 
              placeholder="Qual?"  
            /> 
            : <></>}
          </th>
        </tr>

        <tr>
          <th>
            Faz uso de prótese dentária?
            <select 
              value={form.usoProteseDentaria}
              onChange={e => setForm({ usoProteseDentaria: e.target.value})}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.usoProteseDentaria === 'SIM' ?
            <input 
              type="text" 
              value={form.usoProteseDentariaQual} 
              onChange={e=> setForm({ usoProteseDentariaQual: e.target.value})} 
              placeholder="Qual?"  
            /> 
            : <></>} 
          </th>

          <th>
            Percebe sangramento na gengiva?
            <select 
              value={form.sangramentoGengiva}
              onChange={e => setForm({ sangramentoGengiva: e.target.value})}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {form.sangramentoGengiva === 'SIM' ?
              <select 
                value={form.sangramentoGengivaQuando}
                onChange={e => setForm({ sangramentoGengivaQuando: e.target.value})}
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
            <select 
              value={form.escovaDentesSozinho}
              onChange={e=> setForm({ escovaDentesSozinho: e.target.value })}  
            >
              <option value="">Selecione</option>
              <option value="SIM">Sim</option>
              <option value="NAO">Nao (Pessoa ou cuidador)</option>
            </select>
          </th>

          <th colSpan="2">
            <th>
              Faz uso de creme dental? 
              <select 
                value={form.usoCremeDental}
                onChange={e => setForm({ usoCremeDental: e.target.value })}
              >
                <option value="">Selecione</option>
                <option value="SIM">Sim</option>
                <option value="NAO">Não</option>
              </select> 
            </th>
            
            <th>
              Faz uso de enxaguatório dental?		
              <select 
                value={form.enxaguatorioDental}
                onChange={e => setForm({ enxaguatorioDental: e.target.value })}
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
            <select 
              value={form.frequenciaEscovacao} 
              onChange={e => setForm({ frequenciaEscovacao: e.target.value})}
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
            <select 
              value={form.frequenciaFioDental} 
              onChange={e => setForm({ frequenciaFioDental: e.target.value })}
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
                <select 
                  value={form.repiraNormalmentePeloNariz} 
                  onChange={e => setForm({ repiraNormalmentePeloNariz: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem apneia(ronco)?
                <select 
                  value={form.temApneia} 
                  onChange={e => setForm({ temApneia: e.target.value })}
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
                <select 
                  value={form.acordaComFaltaAr} 
                  onChange={e => setForm({ acordaComFaltaAr: e.target.value })}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem impactação alimentar?
                <select 
                  value={form.impactoAlimentar} 
                  onChange={e => setForm({ impactoAlimentar: e.target.value })}
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
                <select 
                  value={form.rangeOsDentes} 
                  onChange={e => setForm({ rangeOsDentes: e.target.value })}
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
                <select 
                  value={form.doresNaATM} 
                  onChange={e => setForm({ doresNaATM: e.target.value })}
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
                <select 
                  value={form.estaloNaMandigula} 
                  onChange={e => setForm({ estaloNaMandigula: e.target.value })}
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
            <input  
              type="text" 
              placeholder="__/__ mmHg" 
              value={form.pressaoArterial} 
              onChange={e => setForm({ pressaoArterial: e.target.value })} 
            />  
          </th>
          <th>
            Pulso radical
            <input  
              type="text" 
              placeholder="_____/minuto" 
              value={form.pulsoRadical} 
              onChange={e => setForm({ pulsoRadical: e.target.value })} 
            /> 
          </th>
          <th>
            Frequência respiratório
            <input  
              type="text" 
              placeholder="____/minuto" 
              value={form.frequenciaRespiratoria} 
              onChange={e => setForm({ frequenciaRespiratoria: e.target.value })} 
            /> 
          </th>
          <th>
            Temperatura
            <input  
              type="text" 
              placeholder=" __ ºC" 
              value={form.temperatura} 
              onChange={e => setForm({ temperatura: e.target.value })} 
            /> 
          </th>
        </tr>

        <tr >
          <th>
            Altura: <input type="text" value={form.Altura} onChange={e => setForm({ Altura: e.target.value })} />
          </th>
          <th></th>
          <th>
            Peso: <input type="text" value={form.peso} onChange={e => setForm({ peso: e.target.value })} />
          </th>
        </tr>

        <tr>
          <th>ATM <input type="text" value={form.ATM} onChange={e => setForm({ ATM: e.target.value })} /></th>
          <th>Linfonodos<input type="text" value={form.Linfonodos} onChange={e => setForm({ Linfonodos: e.target.value })} /></th>
          <th>Pele<input type="text" value={form.pele} onChange={e => setForm({ pele: e.target.value })} /></th>
        </tr>

        <tr>
          <th>Simetria facial <input type="text" value={form.simetriaFacial} onChange={e => setForm({ simetriaFacial: e.target.value })} /></th>
          <th>Lábios <input type="text" value={form.labios} onChange={e => setForm({ labios: e.target.value })} /></th>
          <th>Glândulas <input type="text" value={form.glandulas} onChange={e => setForm({ glandulas: e.target.value })} /></th>
        </tr>

        <tr>
          <th>Mucosa Labial <input type="text" value={form.mucosaLabial} onChange={e => setForm({ mucosaLabial: e.target.value })} /></th>
          <th>Mucosa jugal <input type="text" value={form.mucosaJugal} onChange={e => setForm({ mucosaJugal: e.target.value })} /></th>
          <th>Região retromolar <input type="text" value={form.regiaoRetromolar} onChange={e => setForm({ regiaoRetromolar: e.target.value })} /></th>
          <th>Gengiva <input type="text" value={form.gengiva} onChange={e => setForm({ gengiva: e.target.value })} /></th>
        </tr>

        <tr>
          <th>Palato <input type="text" value={form.palato} onChange={e => setForm({ palato: e.target.value })} /></th>
          <th>Língua <input type="text" value={form.lingua} onChange={e => setForm({ lingua: e.target.value })} /></th>
          <th>Assoalho <input type="text" value={form.assoalho} onChange={e => setForm({ assoalho: e.target.value })} /></th>
          <th>Orofaringe <input type="text" value={form.orofaringe} onChange={e => setForm({ orofaringe: e.target.value })} /></th>
        </tr>

        <tr>
          Descrição da lesão: <input type="text" value={form.descriLesao} onChange={e => setForm({ descriLesao: e.target.value })} />
        </tr>

        <tr>
          Hipóteses diagnósticas: <input type="text" value={form.hipotDiagnosticas} onChange={e => setForm({ hipotDiagnosticas: e.target.value })} />
        </tr>
        
      </tbody>

    </table>

    <h3>3.4. Exames Complementares</h3>

    <table border="1">
      <tr>
        <th>
          Radiográficos: <input type="text" value={form.radiograficos} onChange={e => setForm({ radiograficos: e.target.value })} />
        </th>
      </tr>

      <tr>
        <th>
          Anatomopatológicos: <input type="text" value={form.anatomopatologicos} onChange={e => setForm({ anatomopatologicos: e.target.value })} />
        </th>
      </tr>

      <tr>
        <th>
          Clínico-laboratoriais: <input type="text" value={form.clinicoLaboratoriais} onChange={e => setForm({ clinicoLaboratoriais: e.target.value })} />
        </th>
      </tr>
    </table>

    <h3>3.5. Avaliação do controle de biofilme</h3>

    <table border="1">
      <tbody>

        <tr>
          <th>
            data: <input type="date" value={form.ACB1Data} onChange={e => setForm({ ACB1Data: e.target.value })}/>
          </th>

          <th>
            16(V) <input type="text" value={form.ACB116V} onChange={e => setForm({ ACB116V: e.target.value })} />
            46(L) <input type="text" value={form.ACB146L} onChange={e => setForm({ ACB146L: e.target.value })} />
          </th>

          <th>
            11(V) <input type="text" value={form.ACB111V} onChange={e => setForm({ ACB111V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB131L} onChange={e => setForm({ ACB131V: e.target.value })} />
          </th>

          <th>
            26(V) <input type="text" value={form.ACB126V} onChange={e => setForm({ ACB126V: e.target.value })} />
            &nbsp;36(L) <input type="text" value={form.ACB136L} onChange={e => setForm({ ACB136V: e.target.value })} />
          </th>

          <th>
            IHOS <input type="text" value={form.ACB1IHOS} onChange={e => setForm({ ACB1IHOS: e.target.value })} />
          </th>
        </tr>
          {/* //////1 */}
        <tr>
          <th>
            data: <input type="date" value={form.ACB2Data} onChange={e => setForm({ ACB2Data: e.target.value })}/>
          </th>

          <th>
          16(V) <input type="text" value={form.ACB216V} onChange={e => setForm({ ACB216V: e.target.value })} />
            &nbsp;46(L) <input type="text" value={form.ACB243L} onChange={e => setForm({ ACB243L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB211V} onChange={e => setForm({ ACB211V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB231L} onChange={e => setForm({ ACB231L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB211V} onChange={e => setForm({ ACB211V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB231L} onChange={e => setForm({ ACB231L: e.target.value })} />
          </th>
          <th>
            IHOS <input type="text" value={form.ACB2IHOS} onChange={e => setForm({ ACB1IHOS: e.target.value })} />
          </th>
        </tr>
              {/* //////2 */}
        <tr>
          <th>
            data: <input type="date" value={form.ACB3Data} onChange={e => setForm({ ACB3Data: e.target.value })}/>
          </th>

          <th>
          16(V) <input type="text" value={form.ACB316V} onChange={e => setForm({ ACB316V: e.target.value })} />
            &nbsp;46(L) <input type="text" value={form.ACB343L} onChange={e => setForm({ ACB343L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB311V} onChange={e => setForm({ ACB311V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB331L} onChange={e => setForm({ ACB331L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB311V} onChange={e => setForm({ ACB311V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB331L} onChange={e => setForm({ ACB331L: e.target.value })} />
          </th>
          <th>
            IHOS <input type="text" value={form.ACB3IHOS} onChange={e => setForm({ ACB3IHOS: e.target.value })} />
          </th>
        </tr>
            {/* //////3 */}
        <tr>
          <th>
            data: <input type="date" value={form.ACB4Data} onChange={e => setForm({ ACB4Data: e.target.value })}/>
          </th>

          <th>
          16(V) <input type="text" value={form.ACB416V} onChange={e => setForm({ ACB416V: e.target.value })} />
            &nbsp;46(L) <input type="text" value={form.ACB443L} onChange={e => setForm({ ACB443L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB411V} onChange={e => setForm({ ACB411V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB431L} onChange={e => setForm({ ACB431L: e.target.value })} />
          </th>

          <th>
          11(V) <input type="text" value={form.ACB411V} onChange={e => setForm({ ACB411V: e.target.value })} />
            &nbsp;31(L) <input type="text" value={form.ACB431L} onChange={e => setForm({ ACB431L: e.target.value })} />
          </th>
          <th>
            IHOS <input type="text" value={form.ACB4IHOS} onChange={e => setForm({ ACB4IHOS: e.target.value })} />
          </th>
        </tr>
            {/* //////4 */}
        <tr>
        Observações: <textarea value={form.ACBObservacoes} onChange cols="26" rows="5"></textarea>
        </tr>

        <tr>
          <th>
            Discente:
            Nome: <input type="text"value={form.ACBNome} onChange={e=> setForm({ ACBNome: e.target.value }) } />
            CPD: <input type="text"value={form.ACBCPD} onChange={e=> setForm({ ACBCPD: e.target.value })} />
          </th>

          <th>
            Visto Docente: <input type="text" value={form.vistDocente} onChange={e => setForm({ vistDocente: e.target.value })} /> 
          </th>
          <th>
            data <input type="date" value={form.ACBData} onChange={e => setForm({ ACBData: e.target.value })} />
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

    {check ?
      <input 
        type="file"  
        onChange={upload} 
        disabled={check? false: true}
      />
      :
      <> </>
    }
    

    <h3>4. Necessidade de tratamento</h3>

    <table border="1">
      <tr>
      <input type="checkbox" name="PERIODONTIA"  value={form.periodontiaCheckBox} onChange={e => setForm({ periodontiaCheckBox: e.target.checked })} />
      <label htmlFor="PERIODONTIA">Periodontia</label>

      <input type="checkbox" name="ENDODONTIA" value={form.endodontiaCheckBox} onChange={e => setForm({ endodontiaCheckBox: e.target.checked })} />
      <label htmlFor="ENDODONTIA">ENDODONTIA</label>

      <input type="checkbox" name="DENTISTICA" value={form.dentisticaCheckBox} onChange={e => setForm({ dentisticaCheckBox: e.target.checked })} />
      <label htmlFor="DENTISTICA">DENTÍSTICA</label>

      <input type="checkbox" name="CIRURGIA" value={form.cirurgiaCheckBox} onChange={e => setForm({ cirurgiaCheckBox: e.target.checked })} />
      <label htmlFor="CIRURGIA">CIRURGIA</label>

      <input type="checkbox" name="PROTESE FIXA" value={form.proteseFixaCheckBox} onChange={e => setForm({ proteseFixaCheckBox: e.target.checked })} />
      <label htmlFor="PROTESE FIXA">PRÓTESE FIXA</label>

      <input type="checkbox" name="PROTESE PARCIAL REMOVIVEL" value={form.proteseParcialRemovivelCheckBox} onChange={e => setForm({ proteseParcialRemovivelCheckBox: e.target.checked })} />
      <label htmlFor="PROTESE PARCIAL REMOVIVEL">PRÓTESE PARCIAL REMOVÍVEL</label>

      <input type="checkbox" name="PROTESE TOTAL REMOVIVEL" value={form.proteseTotalRemovivelCheckBox} onChange={e => setForm({ proteseTotalRemovivelCheckBox: e.target.checked })} />
      <label htmlFor="PROTESE TOTAL REMOVIVEL">PRÓTESE TOTAL REMOVÍVEL</label>

      </tr>

      <tr>
          <th>
            Discente: &nbsp;&nbsp;&nbsp;
            Nome: <input type="text"value={form.NTNome} onChange={e=> setForm({ NTNome: e.target.value }) } />
            CPD: <input type="text"value={form.NTCPD} onChange={e=> setForm({ NTCPD: e.target.value })} />
          </th>

          <th>
            Visto Docente: <input type="text" value={form.NTVistDocente} onChange={e => setForm({ NTVistDocente: e.target.value })} /> 
          </th>
          <th>
            data <input type="date" value={form.NTData} onChange={e => setForm({ NTData: e.target.value })} />
          </th>
        </tr>

        <tr>
          Observações: <textarea 
            cols="25" 
            rows="1"
            value={form.NTObservacoes}
            onChange={e => setForm({ NTObservacoes: e.target.value })}
          ></textarea>
        </tr>
    </table>
    <h4>*Para a triagem</h4>
    <table border="1">
      <tr>
        <th>Docente <input type="text" value={form.PTDocente} onChange={e => setForm({ PTDocente: e.target.value })} /></th>
        <th>Pontuação <input type="text" value={form.PTPontuacao} onChange={e => setForm({ PTPontuacao: e.target.value })} /></th>
        <th>Data <input type="date" value={form.PTDate} onChange={e => setForm({ PTDate: e.target.value })} /></th>
      </tr>
    </table>\

    <button style={{alignSelf: 'center'}} onClick={enviar}>Enviar</button>
  </div>
  );
};
export default withRouter(FichaClinica);