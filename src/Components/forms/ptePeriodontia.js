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

      <table>
        <thead>
          <tr>
            <th>PLACA VISIVEL</th>
          </tr>

          <tr>
            <th colSpan="16">PLACA VISIVEL</th>
            <th>18 <input type="checkbox" name="18" id=""/></th>
            <th>17</th>
            <th>16</th>
            <th>15</th>
            <th>14</th>
            <th>13</th>
            <th>12</th>
            <th>11</th>
            <th>21</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            <th>26</th>
            <th>27</th>
            <th>28</th>

          </tr>
        </thead>
      </table>
    </div>
);
}
export default withRouter(PtePeriodontia);