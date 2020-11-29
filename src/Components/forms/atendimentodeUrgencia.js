import {withRouter} from 'react-router-dom';

const atendimentodeUrgencia = props => {
  
  return (
    <div>
        <h1><center>ATENDIMENTO DE URGÊNCIA</center></h1>
        <h5 style={{color: 'red'}}><center><font size="3">***Preencher somente na presença do paciente!!!</font></center></h5>
        <h3>1. IDENTIFICAÇÃO DO PACIENTE</h3>
        <table border="1">
            <tr>
                <th colSpan="2">Nome: <input type="text"/></th>
                <th>Data de nascimento: <input type="date"/></th>
            </tr>

            <tr>
                <th>Genero:<input type="checkbox" name="M" id=""/>
                <text>M</text>
                <input type="checkbox" name="F" id=""/><text>F</text></th>
                <th>Naturalidade: <input type="text"/></th>
                <th>Nacionalidade: <input type="text"/></th>
            </tr>

            <tr>
                <th>RG:<input type="text"/></th>
                <th>Data de expedição: <input type="date"/></th>
                <th>Orgão: <input type="text"/></th>
            </tr>

            <tr>
                <th>CPF:<input type="text"/></th>
                <th>Estado civil: <input type="date"/></th>
                <th>Ocupação: <input type="text"/></th>
            </tr>

            <tr>
                <th>Pai:<input type="text"/></th>
                <th>Mãe: <input type="text"/></th>
                <th>Responsável legal: <input type="text"/></th>
            </tr>
            <tr>
                <th colSpan="2">Endereço:<input type="text"/></th>
                <th>CEP: <input type="text"/></th>
            </tr>

            <tr>
                <th>Bairro:<input type="text"/></th>
                <th>Cidade/UF: <input type="text"/></th>
                <th>Telefones: <input type="text"/></th>
            </tr>
        </table><br/>
        <h3>2. EXAME CLÍNICO</h3>
        <h4>2.1 ANAMNESE</h4>

        <table border="1">
            <tr>
                <th>Queixa pricipal:<input type="text"/></th>
            </tr>
            <tr>
                <th>História da doença atual:<input type="text"/></th>
            </tr>
            <tr>
                <th>Antecedentes familiares:<input type="text"/></th>
            </tr>
        </table>

        <table border="1">
            <tr>
                <th rowSpan="3">Questionário de saúde<input type="text"/><br/><br/>
                <text><left><font size="1">NSI: Não sabe informar.</font></left></text></th>
                <th colSpan="3">Data</th>
            </tr>
            <tr>
                <th colSpan="3"><input type="date"/></th>
            </tr>
            <tr>
                <th>SIM</th>
                <th>NÃO</th>
                <th>NSI</th>
            </tr>
            <tr>
                <th>Está sob tratamento médico?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Está tomando algum medicamento? Qual? <input type="text"/></th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem história de alergia? <input type="checkbox" name="Medicamento" id=""/>Medicamento.<br/>
                <input type="checkbox" name="Água sanitária" id=""/>Água sanitária
                <input type="checkbox" name="Látex" id=""/>Látex
                <input type="checkbox" name="Outra" id=""/>Outra:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem ou teve problemas respiratórios?<br/>
                <input type="checkbox" name="Asma" id=""/>Asma
                <input type="checkbox" name="Enfizema" id=""/>Enfizema
                <input type="checkbox" name="Outro" id=""/>Outro:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem ou teve doença articular?<br/>
                <input type="checkbox" name="Artrite" id=""/>Artrite
                <input type="checkbox" name="Febre reumática" id=""/>Febre reumática
                <input type="checkbox" name="Outra" id=""/>Outra:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem ou teve distúrbio sanguíneo?<br/>
                <input type="checkbox" name="Anemia" id=""/>Anemia
                <input type="checkbox" name="Hemorragia" id=""/>Hemorragia
                <input type="checkbox" name="Outro" id=""/>Outro:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Já fez ou faz tratamento radioterápico de tumor? Qual?
                <input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Já fez ou faz tratamento quimioterápico de tumor? Qual?
                <input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem diabetes?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem ou teve hepatite A, B ou C?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tomou vacina contra Hepatite B?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem algum problema renal?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem alteração hormonal?<br/>
                <input type="checkbox" name="Tireóide" id=""/>Tireóide
                <input type="checkbox" name="Suprarenal" id=""/>Suprerenal
                <input type="checkbox" name="Outra" id=""/>Outra:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem algum problema hepático?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem problema estomacal?<br/>
                <input type="checkbox" name="Gastrite" id=""/>Gastrite
                <input type="checkbox" name="Úlcera" id=""/>Úlcera
                <input type="checkbox" name="Outro" id=""/>Outro:<input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem sífilis ou outra DST?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem herpes ou aftas frequentes?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>É HIV positivo?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem alguma síndrome ou comprometimento mental? Qual?
                <input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem eplepsia?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Fez ou faz tratamento psiquiátrico?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Já se submeteu à cirurgia? Qual?
                <input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Já recebeu transfusão de sangue?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem dores de cabeça frequentes?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem cicatrização lenta?</th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Está ou poderia estar grávida ou amamentado? Período:
                <input type="text"/>
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Tem ou teve doença cardiovascular?<br/>
                <input type="checkbox" name="Hipertensão arterial" id=""/>Hipertensão arterial
                <input type="checkbox" name="Infarto" id=""/>Infarto
                <input type="checkbox" name="Endocardite bacteriana" id=""/>Endocardite bacteriana
                </th>
                <th><input type="checkbox" name="SIM" id=""/></th>
                <th><input type="checkbox" name="Não" id=""/></th>
                <th><input type="checkbox" name="NSI" id=""/></th>
            </tr>
            <tr>
                <th>Pressão arterial</th>
                <th colSpan="3"><input type="text"/>mmHg</th>
            </tr>
            <tr>
                <th colSpan="4">Informações relevantes sobre alguma condição de saúde:<input type="text"/></th>
            </tr>
            <tr>
                <th colSpan="4">Possui alguma doença que não foi perguntada?
                <input type="checkbox" name="Sim" id=""/>Sim
                <input type="checkbox" name="Não" id=""/>Não<br/>
                Qual?<input type="text"/>
                </th>
            </tr>
            <tr>
                <th colSpan="4">Faz uso de álcool?
                <input type="checkbox" name="Não" id=""/>Não<br/>
                <input type="checkbox" name="Sim" id=""/>Sim
                <input type="checkbox" name="Diariamente" id=""/>Diariamente
                <input type="checkbox" name="Dias por semana" id=""/>Dias por semana
                <input type="checkbox" name="Socialmente" id=""/>Socialmente
                </th>
            </tr>
            <tr>
                <th colSpan="4">Faz uso de fumo?
                <input type="checkbox" name="Não" id=""/>Não<br/>
                <input type="checkbox" name="Sim" id=""/>Sim
                <input type="checkbox" name="Cigarros por dia" id=""/>Cigarros por dia
                <input type="checkbox" name="Socialmente" id=""/>Socialmente
                Qual?<input type="text"/>
                </th>
            </tr>
            <tr>
                <th colSpan="4">Faz uso de drogas ilícitas?
                <input type="checkbox" name="Não" id=""/>Não<br/>
                <input type="checkbox" name="Sim" id=""/>Sim
                <input type="checkbox" name="Diariamente" id=""/>Diariamente
                <input type="checkbox" name="Dias por semana" id=""/>Dias por semana
                Qual?<input type="text"/>
            </th>
            </tr>
            <tr>
                <th colSpan="4">Outros hábitos:<input type="text"/></th>
            </tr>
            <tr>
                <th colSpan="4">Obervações:<input type="text"/></th>
            </tr>
            <tr>
                <th colSpan="4">Declaro que as informações relatadas na anamnese são verdadeiras
                e me comprometo a informar ao responsável<br/> pelo meu atendimento qualquer alteração
                do estado de saúde que ocorra durante o meu tratamento.<br/>
                <input type="date"/>Paciente ou responsável legal<input type="text"/></th>
            </tr>
            <tr>
                <th>DISCENTE:<input type="text"/></th>
                <th>DOCENTE:<input type="text"/></th>
                <th colSpan="2">DATA:<input type="date"/></th>
            </tr>
        </table><br/>
        <h4>2.2	EXAME FÍSICO (ectoscopia, oroscopia e sinais vitais)</h4>

        <table border="1">
            <tr>
                <th>Pressão arterial:<input type="text"/>mmHg</th>
                <th>Pulso radial:<input type="text"/>/minuto</th>
                <th>Frequência respiratória:<input type="text"/>/minuto</th>
                <th>Temperatura:<input type="text"/>ºC</th>
            </tr>
            <tr>
                <th colSpan="2">Altura:<input type="text"/></th>
                <th colSpan="2">Peso:<input type="text"/></th>
            </tr>
            <tr>
                <th>ATM<input type="text"/></th>
                <th>Linfonodos<input type="text"/></th>
                <th colSpan="2">Pele<input type="text"/></th>
            </tr>
            <tr>
                <th>Simetria facial<input type="text"/></th>
                <th>Lábios<input type="text"/></th>
                <th colSpan="2">Glândulas<input type="text"/></th>
            </tr>
            <tr>
                <th>Mucosa labial<input type="text"/></th>
                <th>Mucosa jugal<input type="text"/></th>
                <th>Região retromolar<input type="text"/></th>
                <th>Gengiva<input type="text"/></th>
            </tr>
            <tr>
                <th>Palato<input type="text"/></th>
                <th>Língua<input type="text"/></th>
                <th>Assoalho<input type="text"/></th>
                <th>Orofaringe<input type="text"/></th>
            </tr>
            <tr>
                <th colSpan="4">Obervações:<input type="text"/></th>
            </tr>
        </table><br/>
        <h4>2.2	EXAMES REALIZADOS PARA O DIAGNÓSTICO / ACHADOS</h4>

        <table border="1">
            <tr>
                <th>Clínicos:<input type="text"/></th>
            </tr>
            <tr>
                <th>Radiográficos:<input type="text"/></th>
            </tr>
        </table><br/>
        <h3>3. DIAGNÓSTICO</h3>
        <table border="1">
            <tr>
                <th><input type="text"/></th>
            </tr>
        </table><br/>
        <h3>4. PLANO DE TRATAMENTO</h3>
        <table border="1">
            <tr>
                <th><input type="text"/></th>
            </tr>
        </table><br/>

        <table border="1">
            <tr>
                <th>DISCENTE:<input type="text"/></th>
                <th>DOCENTE:<input type="text"/></th>
                <th>DATA:<input type="date"/></th>
            </tr>
        </table><br/>
        <h3>5. PROCEDIMENTO REALIZADO</h3>
        <table border="1">
            <tr>
                <th><input type="text"/></th>
            </tr>
        </table><br/>
        <h3>6. RECOMENDAÇÕES PÓS-OPERATÓRIAS</h3>
        <table border="1">
            <tr>
                <th><input type="text"/></th>
            </tr>
        </table><br/>
        <table border="1">
            <tr>
                <th>Paciente ou resposável legal<input type="text"/></th>
                <th>DATA:<input type="date"/></th>
            </tr>
        </table><br/>
        <table border="1">
            <tr>
                <th>DISCENTE:<input type="text"/></th>
                <th>DOCENTE:<input type="text"/></th>
                <th>DATA:<input type="date"/></th>
            </tr>
        </table>
    </div>
  );
}
export default withRouter(atendimentodeUrgencia);