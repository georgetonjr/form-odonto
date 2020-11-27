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
            <th><text>Cárie</text></th>
            <th><text>Edema extra-oral</text></th>
            <th><text>Cárie</text></th>
            <th><text>Espaço do LP aumentado</text></th>
          </tr>

          <tr>
            <th><text>Alteração coloração</text></th>
            <th><text>Edema intra-oral</text></th>
            <th><text>Resturação</text></th>
            <th><text>Osso Alveolar normal</text></th>
          </tr>

          <tr>
            <th><text>Exposição pulpar</text></th>
            <th><text>Fístula</text></th>
            <th><text>Calcificações pulpares</text></th>
            <th><text>PERDA ÓSSEA</text><br/>
            <text>Vertical</text>
            <input type="checkbox" name="Vertical" id=""/>
            <text>Horizontal</text>
            <input type="checkbox" name="Horizontal" id=""/>
            </th>
          </tr>

          <tr>
            <th><text>Acesso anterior</text></th>
            <th><text>Linfadenopatia</text></th>
            <th><text>Rizogenese incompleta</text></th>
          </tr>

          <tr>
            <th><text>Atrição/Abrasão</text></th>
            <th><text>Bolsa periodontal:</text><br/><input type="text"/><text>mm</text></th>
            <th><text>REABSORÇÃO</text><br/>
            <text>Interna</text>
            <input type="checkbox" name="Interna" id=""/>
            <text>Externa</text>
            <input type="checkbox" name="Externa" id=""/>
            </th>
          </tr>

          <tr>
            <th><text>Fratura da coroa</text></th>
            <th><text>Exposição de Furca</text></th>
            <th><text>&nbsp;</text></th>
            <th><text>Lesão de furca</text></th>
          </tr>

          <tr>
            <th><text>Luxação</text></th>
            <th><text>Outro:</text><input type="text"/></th>
            <th><text>Fratura radicular</text></th>
            <th><text>Esclerose óssea</text></th>
          </tr>

          <tr>
            <th><text>Mobilidade</text></th>
            <th><text>&nbsp;</text></th>
            <th><text>Pino/Núcleo</text></th>
            <th><text>Hipercementose</text></th>
          </tr>

          <tr>
            <th><text>Pilar de prótese</text></th>
            <th><text>OCLUSÃO</text>
            <select name="" id="">
                <option value=""></option>
                <option value="">Bruxismo</option>
                <option value="">ATM</option>
                <option value="">Placa de mordida</option>
                <option value="">Outro:</option>
            </select><input type="text"/>
            </th>
            <th><text>Acesso anterior</text></th>
            <th><text>RADIOTRANSPARÊNCIA</text><br/>
            <text>Circunscrita</text>
            <input type="checkbox" name="Circunscrita" id=""/>
            <text>Difusa</text>
            <input type="checkbox" name="Difusa" id=""/>
            </th>
          </tr>

          <tr>
            <th><text>RESTAURAÇÃO</text><br/>
            <text>Provisória</text>
            <input type="checkbox" name="Provisória" id=""/><br/>
            <text>Amálgama</text>
            <input type="checkbox" name="Amálgama" id=""/><br/>
            <text>Resina Composta</text>
            <input type="checkbox" name="Resina Composta" id=""/>
            </th>
            <th><text>&nbsp;</text></th>
            <th><text>TRAT. ENDODÔNTICO PRÉVIO</text><br/>
            <text>Condensação satisfatória</text>
            <input type="checkbox" name="Condensação satisfatória" id=""/><br/>
            <text>Condensação insatisfatória</text>
            <input type="checkbox" name="Condensação insatisfatória" id=""/><br/>
            <text>Obturação no limite CDC</text>
            <input type="checkbox" name="Obturação no limite CDC" id=""/><br/>
            <text>Obturação aquém ápice</text>
            <input type="checkbox" name="Obturação aquém ápice" id=""/><br/>
            <text>Obturação além ápice</text>
            <input type="checkbox" name="Obturação além ápice" id=""/>
            </th>
            <th><text>Outro:</text><input type="text"/></th>
          </tr>

          <tr>
            <th><text>COROA</text><br/>
            <text>Provisórias</text>
            <input type="checkbox" name="Provisória" id=""/><br/>
            <text>Metálica</text>
            <input type="checkbox" name="Metálica" id=""/><br/>
            <text>INLAY/ONLAY</text>
            <input type="checkbox" name="INLAY/ONLAY" id=""/><br/>
            <text>Cerâmica</text>
            <input type="checkbox" name="Cerâmica" id=""/><br/>
            <text>Metalocerâmica</text>
            <input type="checkbox" name="Metalocerâmica" id=""/>
            </th>
            <th><text>&nbsp;</text></th>
            <th><text>NORMAL</text></th>
            <th><text>ESPAÇO DO LP NORMAL</text></th>
          </tr>

          <tr>
            <th><text>Outro:</text><input type="text"/></th>
            <th><text>NORMAIS</text></th>
            <th><text>NORMAL</text></th>
            <th><text>ESPAÇO DO LP NORMAL</text></th>
          </tr>

          <tr>
            <th><text>NORMAL</text></th>
            <th><text>NORMAIS</text></th>
            <th><text>NORMAL</text></th>
            <th><text>ESPAÇO DO LP NORMAL</text></th>
          </tr>

          <tr>
            <th><text>NORMAL</text></th>
            <th><text>NORMAIS</text></th>
            <th><text>NORMAL</text></th>
            <th><text>ESPAÇO DO LP NORMAL</text></th>
          </tr>
      </table>
    
    </div>

);
}

export default withRouter(PteEndodontia);