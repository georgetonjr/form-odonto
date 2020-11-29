import {withRouter} from 'react-router-dom';

const PtePeriodontia = props => {
  
  return (
    <div>
    <h1>PTE Periodontia</h1>

    <table border="1">
        <thead>
          <tr>
            <th>PS: Profundidade de sondagem<br/>
            (fundo do sulco/bolsa à margem gengival)<br/>
            NIC: Nível de inserção clínico = PS + Recessão gengival<br/>
            (fundo do sulco/bolsa à junção cemento-esmalte)
            SS: Sangramento à sondagem
            </th>
          </tr>
        </thead>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th colSpan="16">PLACA VISIVEL</th>
            <th rowSpan="3">INDICE DE PLACA(IP)<br/>Número de sítios com placa:
            <input type="text"/><br/>
            Número total de sítios:<input type="text"/><br/>
            </th>
          </tr>

          <tr>
            <th>18<br/> <input type="checkbox" name="18" id=""/></th>
            <th>17<br/> <input type="checkbox" name="17" id=""/></th>
            <th>16<br/> <input type="checkbox" name="16" id=""/></th>
            <th>15<br/> <input type="checkbox" name="15" id=""/></th>
            <th>14<br/> <input type="checkbox" name="14" id=""/></th>
            <th>13<br/> <input type="checkbox" name="13" id=""/></th>
            <th>12<br/> <input type="checkbox" name="12" id=""/></th>
            <th>11<br/> <input type="checkbox" name="11" id=""/></th>
            <th>21<br/> <input type="checkbox" name="21" id=""/></th>
            <th>22<br/> <input type="checkbox" name="22" id=""/></th>
            <th>23<br/> <input type="checkbox" name="23" id=""/></th>
            <th>24<br/> <input type="checkbox" name="24" id=""/></th>
            <th>25<br/> <input type="checkbox" name="25" id=""/></th>
            <th>26<br/> <input type="checkbox" name="26" id=""/></th>
            <th>27<br/> <input type="checkbox" name="27" id=""/></th>
            <th>28<br/> <input type="checkbox" name="28" id=""/></th>
          </tr>

          <tr>
            <th>48<br/> <input type="checkbox" name="48" id=""/></th>
            <th>47<br/> <input type="checkbox" name="47" id=""/></th>
            <th>46<br/> <input type="checkbox" name="46" id=""/></th>
            <th>45<br/> <input type="checkbox" name="45" id=""/></th>
            <th>44<br/> <input type="checkbox" name="44" id=""/></th>
            <th>43<br/> <input type="checkbox" name="43" id=""/></th>
            <th>42<br/> <input type="checkbox" name="42" id=""/></th>
            <th>41<br/> <input type="checkbox" name="41" id=""/></th>
            <th>31<br/> <input type="checkbox" name="31" id=""/></th>
            <th>32<br/> <input type="checkbox" name="32" id=""/></th>
            <th>33<br/> <input type="checkbox" name="33" id=""/></th>
            <th>34<br/> <input type="checkbox" name="34" id=""/></th>
            <th>35<br/> <input type="checkbox" name="35" id=""/></th>
            <th>36<br/> <input type="checkbox" name="36" id=""/></th>
            <th>37<br/> <input type="checkbox" name="37" id=""/></th>
            <th>38<br/> <input type="checkbox" name="38" id=""/></th>
          </tr>
        </thead>
      </table>

        <h2>Periograma Inicial</h2>
    </div>
);
}
export default withRouter(PtePeriodontia);