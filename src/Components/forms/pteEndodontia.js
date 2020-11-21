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
    
    
    
    </div>

);
}

export default withRouter(PteEndodontia);