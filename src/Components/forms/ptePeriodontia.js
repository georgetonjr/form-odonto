import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import api from '../../Services/api';

const PtePeriodontia = props => {
  
  return (
    <div>
    <h1>PTE Periodontia</h1>

    <table>
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

      <table>
        <thead>
          <tr>
            <th>PLACA VISIVEL</th>
          </tr>

          <tr>
            <th colSpan="16">PLACA VISIVEL</th>
            <th>18 <input type="checkbox" name="18" id=""/></th>
            <th>17 <input type="checkbox" name="17" id=""/></th>
            <th>16 <input type="checkbox" name="16" id=""/></th>
            <th>15 <input type="checkbox" name="15" id=""/></th>
            <th>14 <input type="checkbox" name="14" id=""/></th>
            <th>13 <input type="checkbox" name="13" id=""/></th>
            <th>12 <input type="checkbox" name="12" id=""/></th>
            <th>11 <input type="checkbox" name="11" id=""/></th>
            <th>21 <input type="checkbox" name="21" id=""/></th>
            <th>22 <input type="checkbox" name="22" id=""/></th>
            <th>23 <input type="checkbox" name="23" id=""/></th>
            <th>24 <input type="checkbox" name="24" id=""/></th>
            <th>25 <input type="checkbox" name="25" id=""/></th>
            <th>26 <input type="checkbox" name="26" id=""/></th>
            <th>27 <input type="checkbox" name="27" id=""/></th>
            <th>28 <input type="checkbox" name="28" id=""/></th>
          </tr>

          <tr>
            <th colSpan="16">PLACA VISIVEL</th>
            <th>48 <input type="checkbox" name="48" id=""/></th>
            <th>47 <input type="checkbox" name="47" id=""/></th>
            <th>46 <input type="checkbox" name="46" id=""/></th>
            <th>45 <input type="checkbox" name="45" id=""/></th>
            <th>44 <input type="checkbox" name="44" id=""/></th>
            <th>43 <input type="checkbox" name="43" id=""/></th>
            <th>42 <input type="checkbox" name="42" id=""/></th>
            <th>41 <input type="checkbox" name="41" id=""/></th>
            <th>31 <input type="checkbox" name="31" id=""/></th>
            <th>32 <input type="checkbox" name="32" id=""/></th>
            <th>33 <input type="checkbox" name="33" id=""/></th>
            <th>34 <input type="checkbox" name="34" id=""/></th>
            <th>35 <input type="checkbox" name="35" id=""/></th>
            <th>36 <input type="checkbox" name="36" id=""/></th>
            <th>37 <input type="checkbox" name="37" id=""/></th>
            <th>38 <input type="checkbox" name="38" id=""/></th>
          </tr>
        </thead>
      </table>
    </div>
);
}
export default withRouter(PtePeriodontia);