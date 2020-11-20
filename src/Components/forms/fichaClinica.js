import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import * as options from '../arrays';

const FichaClinica = form => {
  const [form01, setForm01] = useState({
    veiculo: "",
    doencNaoPergutadas: "",
    fumo: "",
    drogailicitas: "",
    usodealcool: "",

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
    /><br/>

    <input
      type="text"
      name="cpf"
      label="CPF"
      title="Por favor, digite um CPF válido"
      placeholder="CPF"
      required
      maxLength="11"
    /><br/>

    <input
      type="text"
      name="telefone"
      label="Telefone"
      title="Por favor, digite um número de telefone incluindo o DDD, não iniciando em 0 (zero)"
      placeholder="Telefone"
      required
      maxLength="13"
    /><br/>

    <input
      type="text"
      name="rg"
      label="RG"
      title="Por favor, digite um RG válido"
      placeholder="RG"
      required
    /><br/>

    <input
      name="dataex"
      label="Data de Expedição"
      title="Por favor, digite a data de expedição de seu RG"
      placeholder="Data de expedição"
      required
      maxLength="10"
    /><br/>

    <select name="Orgão expeditor" >
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
    /><br/>

    <input
      type="text"
      name="uf"
      label="UF"
      title="Seu o CEP digitado for válido, seu UF deve aparecer aqui"
      placeholder="UF"
      required
      readOnly
    /><br/>

    <input
      type="text"
      name="cidade"
      label="Cidade"
      title="Seu o CEP digitado for válido, sua cidade deve aparecer aqui"
      placeholder="Cidade"
      required
      readOnly
    /><br/>

    <input
      type="text"
      name="bairro"
      label="Bairro"
      title="Seu o CEP digitado for válido, seu bairro deve aparecer aqui"
      placeholder="Bairro"
      required
      readOnly
    /><br/>

    <input
      type="text"
      name="endereco"
      label="Endereço"
      title="Seu o CEP digitado for válido, seu endereço deve aparecer aqui"
      placeholder="Endereço"
      required
      readOnly
    /><br/>

    <input
      type="text"
      name="num"
      label="Número"
      title="Por favor, digite o número de sua casa/apartamento"
      placeholder="Número"
      required
    /><br/>

    <input
      type="text"
      name="complemento"
      label="Complemento"
      title="Por favor, digite o complemento de seu endereço, se houver"
      placeholder="Complemento"
    /><br/>

    <select name="Orgão expeditor" >
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
    /><br/>

    <input
      type="text"
      name="mae"
      label="Mãe"
      title="Por favor, digite o nome completo de sua mãe"
      placeholder="Nome completo de sua mãe"
      required
    /><br/>

    <input
      type="text"
      name="pai"
      label="Pai"
      title="Por favor, digite o nome completo de seu pai"
      placeholder="Nome completo de seu pai"
    /><br/>

    <input
      type="text"
      name="estadocivil"
      placeholder="Estado Civil"
      required
    /><br/>

    <h2>Dados Sócio-Econômicos</h2>

    <label>Nivel de escolaridade</label><br/>
    <select name="Escolaridade" >
    {options.ESCOLARIDADE.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <label>Atividade remunerada</label><br/>
    <select name="atividade remunerada">
      <option value="Sim">Sim</option>
      <option value="autônomo">autônomo</option>
      <option value="CLT">CLT</option>
      <option value="Celetista">Celetista</option>
      <option value="Não">Não</option>
      <option value="Outra">Outra</option>
    </select>
    <input type="text"
      placeholder="Outra"
      readOnly={true}
    /><br/>

    <label>Auxilio do governo</label><br/>
    <select name="auxilio do governo">
      <option value="Sim">Sim</option>
      <option value="Não">Não</option>
    </select>
    <input type="text" placeholder='Valor' readOnly={true}/> <br/>

    <label>Outro membro da familia trabalha</label><br/>
    <select name="outro membro da familia trabalha" >
      <option value="Sim">Sim</option>
      <option value="Não">Não</option>
      <option value="Quem">Quem</option>
    </select><br/>

    <input 
      type="text" 
      name="rendafamilia" 
      placeholder="Renda familiar" 
      readOnly
    /><br/>

    <label>Possui veiculo proprio</label><br/>
    <select 
      name="possui veiculo"
      value={form01.veiculo}
      onChange={e=> setForm01({veiculo: e.target.value})}>
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>
    {form01.veiculo ==='Sim' ? 
    <input 
      type="text" 
      name="quantosveiculos" 
      placeholder="Quantos veiculos" 
      readOnly
    /> : <></>}
    <br/>

    <label>Residencia</label><br/>
    <select name="residencia" >
      <option value="Propria">Sim</option>
      <option value="Alugada">Alugada</option>
      <option value="Outra">Outra</option>
    </select><br/>

    <label>Número de comodos</label><br/>
    <input type="text" placeholder="Número de comodos"/>
    <br/>

    <label>Número de banheiros</label><br/>
    <input type="text" placeholder="Número de banheiros"/>

    <label>Tipo de transporte publico</label><br/>
    <select name="Tipo de transporte publico" >
      <option value="Propria">Onibus</option>
      <option value="Alugada">Metro</option>
      <option value="Outra">Outro</option>
    </select><br/>
    
    <input type="text"/>

    <h2>EXAME CLÍNICO</h2>
    <h3>ANAMNESE</h3>

    <label>Queixa principal</label><br/>
    <input type="text" name="queixa principal" placeholder ="Queixa principal"/><br/>

    <label>História da doença atual</label><br/>
    <input type="text" name="historico da doença atual" placeholder ="Historico da doença atual"/><br/>

    <label>Antecedentes familiares</label><br/>
    <input type="text" name="antecedentes familiares" placeholder ="Antecendentes familiares"/><br/>


    <table border="1">
      <caption>Questionário de saúde</caption>
      
      <thead>
        <tr>
          <th rowSpan="2">Questionário de saúde</th>
          <th rowspan="2">Data</th>
          <th colspan="2">Datas das atualizações</th>
          
        </tr>

      </thead>

      <tbody>
        <tr>
          <td rowspan="2"> </td>

          <td><input type="date"/></td>
          <td><input type="date"/></td>
          <td><input type="date"/></td>
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
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Está tomando algum medicamento? <input type="text" placeholder="Qual"/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem  história  de  alergia?  <input type="text" placeholder="Qual"/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve problemas respiratórios?   <input type="text" placeholder="Asma, Enfizema"/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença articular? <input type="text" placeholder="Arttrite, Febre reumática."/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve distúrbio sanguíneo? <input type="text" placeholder="Anemia, Hemorragia. "/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento radioterápico de tumor?  <input type="text" placeholder="Qual? "/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento quimioterápico de tumor?   <input type="text" placeholder="Qual? "/> </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem diabetes? </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve hepatite? <input type="text" placeholder="Se sim qual? A, B ou C?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tomou vacina contra Hepatite B?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema renal?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem alteração hormonal? <input type="text" placeholder="Se sim qual? Tireóide, Suprarenal?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema hepático?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem problema estomacal? <input type="text" placeholder="Se sim qual? Gastrite, Úlcera?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem sífilis ou outra DST? </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem herpes ou aftas frequentes?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>É HIV positivo? </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem alguma síndrome ou comprometimento mental?<input type="text" placeholder="Se sim qual?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem eplepsia?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Fez ou faz tratamento psiquiátrico? </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Já se submeteu à cirurgia? <input type="text" placeholder="Se sim qual?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Já recebeu transfusão de sangue?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem dores de cabeça frequentes? </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem cicatrização lenta?</td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Está ou poderia estar grávida ou amamentado? <input type="text" placeholder="Período?"/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença cardiovascular?  <input type="text" placeholder="Se sim qual? Hipertensão arterial, Infarto." style={{width: 250}}/></td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
          <td>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="nao" id=""/></th>
            <th><input type="checkbox" name="nsi" id=""/></th>
          </td>
        </tr>

        <tr>
          <td>Pressão arterial</td>
          <td><input type="text" placeholder="180" style={{width: 40}}/>mmHg</td>
          <td><input type="text" placeholder="180" style={{width: 40}}/>mmHg</td>
          <td><input type="text" placeholder="180" style={{width: 40}}/>mmHg</td>
        </tr>

        <tr>
          <td>Informações relevantes sobre alguma condição de saúde: <textarea name="" id="" cols="30" rows="1"></textarea></td>
        </tr>

        <tr>
          <td>Possui alguma doença que não foi perguntada?  
            <select name="Doenças" value={form01.doencNaoPergutadas}  onChange={e=> setForm01({ doencNaoPergutadas: e.target.value })}>
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
            {form01.doencNaoPergutadas ==='Sim' ? 
              <input 
                type="text" 
                name="doecasNaoPergutadas" 
                placeholder="Qual doença" 
                readOnly
              /> : <></>}
          </td>
        </tr>

        <tr>
          Faz uso de álcool?
          <select name="Doenças" value={form01.usodealcool}  onChange={e=> setForm01({ usodealcool: e.target.value })}>
            <option value="Não">Não</option>
            <option value="diariamente">Diariamente</option>
            <option value="3vezesporsemana">3 dias por semana</option>
            <option value="socialmente">Socialmente</option>
          </select>
        </tr>

        <tr>
          Faz uso de fumo?
          <select name="Doenças" value={form01.fumo}  onChange={e=> setForm01({ fumo: e.target.value })}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form01.fumo ==='Sim' || form01.fumo === 'socialmente' ? 
            <> 
            {form01.fumo ==='Sim' ?
              <>
                <input 
                  type="text" 
                  name="vezespdia" 
                  placeholder="Quantos cigarros por dia?" 
                  readOnly
                />

                <input 
                  type="text" 
                  name="fumo" 
                  placeholder="Qual?" 
                  readOnly
                />
              </>
            :
              <input 
                type="text" 
                name="fumo" 
                placeholder="Qual?" 
                readOnly
              />
            }
              </> 
            : 
            <></>}
        </tr>

        <tr>
          Faz uso de droga ilícitas?
          <select name="Doenças" value={form01.drogailicitas}  onChange={e=> setForm01({ drogailicitas: e.target.value })}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {form01.drogailicitas ==='Sim' || form01.drogailicitas === 'socialmente' ? 
            <input 
              type="text" 
              name="fumo" 
              placeholder="Qual?" 
              readOnly
            /> : <></>}
        </tr>

        <tr>
          Outros habitos: <input type="text" placeholder="Quais?" style={{width: 400}}/>
        </tr>

        <tr>
          Observações: <input type="text" placeholder="Observações?" style={{width: 400}}/>
        </tr>

        <tr>
         <b>Declaro que as informações relatadas na anamnese são verdadeiras e me comprometo a informar ao responsável pelo meu atendimento qualquer alteração do estado de saúde que ocorra durante o meu tratamento.
        Brasília,<input type="date"/>.<br/>	Paciente ou responsável legal: <input type="text" placeholder="Nome do responsavel" style={{width: 400}}/>.</b>
        </tr>

        <tr>
        Nome do discente: <input type="text" placeholder="Nome do discente" style={{width: 400}}/>. <br/> 
        CPD: <input type="text" placeholder="00000" style={{width: 200}}/>. 
        Data: <input type="date" name="" id=""/>.
        </tr>


      </tbody>

      <tfoot>
        <tr><td colspan="4">Questionario clinico</td></tr>
      </tfoot>

    </table>

    </div>
  );
};
export default withRouter(FichaClinica);