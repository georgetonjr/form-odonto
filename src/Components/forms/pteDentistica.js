import {withRouter} from 'react-router-dom';

const PteDentistica = props => {
  

  return (
    <div>
      <h1>Ficha PTE Dentística</h1>
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
          <th rowSpan="2">DIAGNÓSTICO(somente os problemas)</th>
          <th rowspan="2">DENTE</th>
          <th colspan="2">PLANO DE TRATAMENTO</th>
          
        </tr>
      </thead>
        <tr>
          <td><input type="text"/></td>
          <td><text>18</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>17</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>16</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>15</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>14</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>13</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>12</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>11</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>21</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>22</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>23</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>24</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>25</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>26</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>27</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>28</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>38</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>37</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>36</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>35</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>34</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>33</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>32</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>31</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>41</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>42</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>43</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>44</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>45</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>46</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>47</text></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="text"/></td>
          <td><text>48</text></td>
          <td><input type="text"/></td>
        </tr>
    </table><br/>

    <table border="1">
        <tr>
          <td><text>ATIVIDADE DE CÁRIE</text><br/>
          <text>Alta</text>
          <input type="checkbox" name="sim" id=""/>
          <text>Baixa</text>
          <input type="checkbox" name="nao" id=""/>
          </td>

          <td colSpan="2"><text>ADEQUAÇÃO DO MEIO</text><br/>
          <text>Sim</text>
          <input type="checkbox" name="sim" id=""/>
          <text>Não</text>
          <input type="checkbox" name="nao" id=""/>
          </td>

          <td><text>DATA</text></td>

          <td><text>DISCENTE</text></td>

          <td><text>DOCENTE</text></td>
        </tr>

        <tr>
          <td rowSpan="4"><text>FLUORTERAPIA</text><br/>
          <text>Sim</text>
          <input type="checkbox" name="sim" id=""/>
          <text>Não</text>
          <input type="checkbox" name="nao" id=""/>
          </td>

          <td><text>Produto</text></td>

          <td>n° de aplicações</td>

          <td rowSpan="2"><input type="date"/></td>

          <td rowSpan="2"><input type="text"/></td>

          <td rowSpan="2"><input type="text"/></td>
        </tr>

        <tr>
          <td><text>Flúor gel (moldeira)</text> </td>

          <td><input type="text"/></td>
        </tr>

        <tr>
          <td><text>Vemix fluoretado</text> </td>

          <td><input type="text"/></td>

          <td colSpan="3" rowSpan="2"><text>OBSERVAÇÕES</text>
          <input type="text"/></td>
        </tr>

        <tr>
          <td><text>Bochecho fluoretado (0,05%)</text> </td>

          <td><input type="text"/></td>
        </tr>

    </table><br/>

    <table border="1">
        <tr>
          <td colSpan="5"><text><center><b>ALTERAÇÕES DO PLANO DO TRATAMENTO</b></center></text></td>
        </tr>

        <tr>
          <td><text><b>DATA</b></text></td>
          <td><text><b>DENTE</b></text></td>
          <td><text><b>DESCRIÇÃO DA ALTERAÇÃO (motivo e novo tratamento proposto)</b></text></td>
          <td><text><b>DISCENTE</b></text></td>
          <td><text><b>DOCENTE</b></text></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td><input type="date"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
          <td><input type="text"/></td>
        </tr>
    </table>

    </div>
  );
}

export default withRouter(PteDentistica);
      