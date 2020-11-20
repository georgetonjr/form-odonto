import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import * as options from '../arrays';

const FichaClinica = props => {
  const [veiculo, setVeiculo] = useState("");

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
      value={veiculo}
      onChange={e=> setVeiculo(e.target.value)}>
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>
    {veiculo ==='Sim' ? 
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

      </tbody>

      <tfoot>
        <tr><td colspan="4">Questionario clinico</td></tr>
      </tfoot>

    </table>


    

    



    </div>
  );
};
export default withRouter(FichaClinica);