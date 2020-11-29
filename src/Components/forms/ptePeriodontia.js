import {withRouter} from 'react-router-dom';

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
    </div>
);
}
export default withRouter(PtePeriodontia);