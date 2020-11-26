import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import * as options from '../arrays';

const FichaClinica = props => {
  const [form, setForm] = useState({
    veiculo: "",
    doencNaoPergutadas: "",
    fumo: "",
    drogailicitas: "",
    usodealcool: "",
    nomePaciente: "",

  });

  return (
    <div>
      <h1>Ficha Clínica</h1>

      <h2>IDENTIFICAÇÃO DO PACIENTE</h2>

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

    <h2>Dados Sócio-Econômicos</h2>

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
    />

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

    <h2>EXAME CLÍNICO</h2>
    <h3>ANAMNESE</h3>

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


      </tbody>
    </table>

    </div>
  );
};
export default withRouter(FichaClinica);