import {withRouter} from 'react-router-dom';

const PteEndodontia = props => {
  

  return (
    <div>
      <h1>Ficha PTE Endodontia</h1>
      <h2> 
      <input
      type="text"
      placeholder="PACIENTE"
      required
      />
      <input
      type="text"
      placeholder="PRONTUÁRIO"
      required
      /><br/> </h2>

      <table border="1">
        <thead>
          <tr>
            <th>DENTE:</th>
            <th>QUEIXA PRINCIPAL:</th>
            <th>
              <select name="" id="">
                <option value="">ASSINTOMÁTICO</option>
                <option value="">SINTOMÁTICO</option>
              </select>
            </th>
          </tr>

          <tr>
            <th colSpan="10"><text>&nbsp;</text></th>
          </tr>

          <tr>
            <th>TRATAMENTO ANTERIOR</th>
            <th><text>Sim</text></th>
            <th><text>Não</text></th>
            <th colSpan="7">SINTOMAS - DOR</th>
          </tr>

          <tr>
            <th><text>Restaurador</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>
            <th><text>LOCALIZAÇÃO</text></th>
            <th><text>CURSO CLÍNICO</text></th>
            <th colSpan="5"><text>QUALIDADE</text></th>
          </tr>

          <tr>
            <th><text>Urgência</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>
            <th rowSpan="4">
              <select name="" id="">
                <option value="">LOCALIZADA</option>
                <option value="">REFLEXA</option>
                <option value="">DIFUSA</option>
                <option value="">IRRADIADA</option>
              </select>
            </th>

            <th rowSpan="4">
              <select name="" id="">
                <option value="">INTERMITENTE</option>
                <option value="">CONTÍNUA</option>
              </select>

            </th>
            <th rowSpan="2"><text>AGUDA</text><br/>
            <text>Sim</text>
            <input type="checkbox" name="sim" id=""/>
            <text>Não</text>
            <input type="checkbox" name="nao" id=""/>
            </th>

            <th rowSpan="2">
            <text>ESPONTÂNEA</text>
            <input type="checkbox" name="CRONICA" id=""/>
              <select name="" id="">
                <option value=""></option>
                <option value="">Pulsátil</option>
                <option value="">Intensidade +</option>
                <option value="">Intensidade ++</option>
                <option value="">Intensidade +++</option>
              </select>
              </th>

              <th rowSpan="2">
              <text>PROVOCADA</text>
              <input type="checkbox" name="ESPONTÂNEA" id=""/>
              <select name="" id="">
                <option value=""></option>
                <option value="">Frio</option>
                <option value="">Mastigação</option>
                <option value="">Calor</option>
                <option value="">Hora do dia</option>
                <option value="">Sal/Açucar</option>
                <option value="">Posição da cabeça</option>
              </select>
              </th>
          </tr>

          <tr>
            <th><text>Endodôntico</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>

          </tr>

          <tr>
            <th><text>Retratamento</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>

            <th rowSpan="2"><text>CRONICA</text><br/>
            <text>Sim</text>
            <input type="checkbox" name="sim" id=""/>
            <text>Não</text>
            <input type="checkbox" name="nao" id=""/>
            </th>

            <th rowSpan="2">
            <text>ESPONTÂNEA</text>
            <input type="checkbox" name="CRONICA" id=""/>
              <select name="" id="">
                <option value=""></option>
                <option value="">Pulsátil</option>
                <option value="">Intensidade +</option>
                <option value="">Intensidade ++</option>
                <option value="">Intensidade +++</option>
              </select>
              </th>

              <th rowSpan="2">
              <text>PROVOCADA</text>
              <input type="checkbox" name="ESPONTÂNEA" id=""/>
              <select name="" id="">
                <option value=""></option>
                <option value="">Frio</option>
                <option value="">Mastigação</option>
                <option value="">Calor</option>
                <option value="">Hora do dia</option>
                <option value="">Sal/Açucar</option>
                <option value="">Posição da cabeça</option>
              </select>
              </th>
          </tr>

          <tr>
            <th><text>Cirurgia Parendodontica</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>
          </tr>

          <tr>
            <th><text>Sintomatologia pre-operatoria</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>

            <th colSpan="3"><text>CRONOLOGIA</text></th>
            <th colSpan="2" rowSpan="2"><text>OBSERVAÇÕES:</text><input type="text"/></th>
          </tr>

          <tr>
            <th><text>sintomatologia pos-operatoria</text></th>
            <th><input type="checkbox" name="sim" id=""/></th>
            <th><input type="checkbox" name="não" id=""/></th>

            <th><text>Inicio:</text><input type="text"/></th>
            <th><text>Evolução:</text><input type="text"/></th>
          </tr>

        </thead>
      </table>
          <br/>

      <table border="1">
        <thead>
          <tr>
            <th colSpan="2"><text>SINAIS CLÍNICOS</text></th>
            <th colSpan="2"><text>ACHADOS RADIIOGRÁGICOS</text></th>
          </tr>
          <tr>
            <th><text>DENTE</text></th>
            <th><text>TECIDOS MOLES</text></th>
            <th><text>DENTE</text></th>
            <th><text>PERIODONTO</text></th>
          </tr>
        </thead>
          <tr>
            <th><input type="checkbox" name="Normal" id=""/><text>Normal</text></th>
            <th><input type="checkbox" name="Normais" id=""/><text>Normais</text></th>
            <th><input type="checkbox" name="Normal" id=""/><text>Normal</text></th>
            <th><input type="checkbox" name="Espaço do LP normal" id=""/><text>Espaço do LP normal</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Cárie" id=""/><text>Cárie</text></th>
            <th><input type="checkbox" name="Edema extra-oral" id=""/><text>Edema extra-oral</text></th>
            <th><input type="checkbox" name="Cárie" id=""/><text>Cárie</text></th>
            <th><input type="checkbox" name="Epaço do LP aumento" id=""/><text>Espaço do LP aumentado</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Alteração coloração" id=""/><text>Alteração coloração</text></th>
            <th><input type="checkbox" name="Edema intra-oral" id=""/><text>Edema intra-oral</text></th>
            <th><input type="checkbox" name="Resturação" id=""/><text>Resturação</text></th>
            <th><input type="checkbox" name="Osso Alveolar normal" id=""/><text>Osso Alveolar normal</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Exposição pulpar" id=""/><text>Exposição pulpar</text></th>
            <th><input type="checkbox" name="Fístula" id=""/><text>Fístula</text></th>
            <th><input type="checkbox" name="Calcificações pulpares" id=""/><text>Calcificações pulpares</text></th>
            <th><input type="checkbox" name="Perda óssea" id=""/><text>Perda óssea</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Vertical</option>
                <option value="">Horizontal</option>
            </select>
            </th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Acesso anterior" id=""/><text>Acesso anterior</text></th>
            <th><input type="checkbox" name="Linfadenopatia" id=""/><text>Linfadenopatia</text></th>
            <th><input type="checkbox" name="Rizogenese incompleta" id=""/><text>Rizogênese incompleta</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Atrição/Abrasão" id=""/><text>Atrição/Abrasão</text></th>
            <th><input type="checkbox" name="Bolsa periodontal:" id=""/><text>Bolsa periodontal:</text><br/><input type="text"/><text>mm</text></th>
            <th><input type="checkbox" name="Reabsorção" id=""/><text>Reabsorção</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Interna</option>
                <option value="">Externa</option>
            </select>
            </th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Fratura da coroa" id=""/><text>Fratura da coroa</text></th>
            <th><input type="checkbox" name="Exposição de Furca" id=""/><text>Exposição de Furca</text></th>
            <th><input type="checkbox" name="Fratura radicular" id=""/><text>Fratura radicular</text></th>
            <th><input type="checkbox" name="Lesão de furca" id=""/><text>Lesão de furca</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Luxação" id=""/><text>Luxação</text></th>
            <th><input type="checkbox" name="Outro:" id=""/><text>Outro:</text><input type="text"/></th>
            <th><input type="checkbox" name="Pino/Núcleo" id=""/><text>Pino/Núcleo</text></th>
            <th><input type="checkbox" name="Esclerose óssea" id=""/><text>Esclerose óssea</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Mobilidade" id=""/><text>Mobilidade</text></th>
            <th><text>&nbsp;</text></th>
            <th><input type="checkbox" name="Acesso anterior" id=""/><text>Acesso anterior</text></th>
            <th><input type="checkbox" name="Hipercementose" id=""/><text>Hipercementose</text></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Pilar de prótese" id=""/><text>Pilar de prótese</text></th>
            <th><input type="checkbox" name="OCLUSÃO" id=""/><text>OCLUSÃO</text>
            <select name="" id="">
                <option value=""></option>
                <option value="">Bruxismo</option>
                <option value="">ATM</option>
                <option value="">Placa de mordida</option>
                <option value="">Outro:</option>
            </select><input type="text"/>
            </th>
            <th><input type="checkbox" name="Trat. endodôntico prévio" id=""/><text>Trat. endodôntico prévio</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Condensação satisfatória</option>
                <option value="">Condensação insatisfatória</option>
                <option value="">Obturação no limite CDC</option>
                <option value="">Obturação aquém ápice</option>
                <option value="">Obturação além ápice</option>
            </select>
            </th>
            <th><input type="checkbox" name="Radiotransparência" id=""/><text>Radiotransparência</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Circunscrita</option>
                <option value="">Difusa</option>
            </select>
            </th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Restauração" id=""/><text>Restauração</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Provisória</option>
                <option value="">Amálgama</option>
                <option value="">Resina Composta</option>
            </select>
            </th>
            <th><text>&nbsp;</text></th>
            <th><input type="checkbox" name="Desvio de conduto" id=""/><text>Desvio de conduto</text></th>
            <th><text>Outro:</text><input type="text"/></th>
          </tr>

          <tr>
            <th><input type="checkbox" name="Coroa" id=""/><text>Coroa</text><br/>
            <select name="" id="">
                <option value=""></option>
                <option value="">Provisórias</option>
                <option value="">Metálica</option>
                <option value="">INLAY/ONLAY</option>
                <option value="">Cerâmica</option>
                <option value="">Metalocerâmica</option>
            </select>
            </th>
            <th><text>&nbsp;</text></th>
            <th><input type="checkbox" name="Instrumento Faturado" id=""/><text>Instrumento Faturado</text></th>

          </tr>

          <tr>
            <th><input type="checkbox" name="Outro:" id=""/><text>Outro:</text><input type="text"/></th>
            <th><text>&nbsp;</text></th>
            <th><input type="checkbox" name="Perfuração radicular" id=""/><text>Perfuração radicular</text></th>

          </tr>

          <tr>
            <th colSpan="4"><text>OBSERVAÇÕES:</text><input type="text"/></th>
          </tr>

      </table>

      <table border="1">
        <thead>
          <tr>
            <th colSpan="5"><text>SEMIOTÉCNICA ENDODÔNTICA</text></th>
          </tr>
        </thead>
          <tr>
            <th colSpan="3"><text>SENSIBILIDADE PULPAR</text></th>
            <th colSpan="3"><text>PERCUSSÃO</text></th>
          </tr>

          <tr>
            <th><text>Frio</text></th>
            <th><text>Calor</text></th>
            <th><text>Vertical</text></th>
            <th><text>Horizontal</text></th>
          </tr> 
      </table>
    
    </div>

);
}

export default withRouter(PteEndodontia);