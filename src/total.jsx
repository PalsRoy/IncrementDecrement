import React, {Component} from 'react';
import './styles.css';


class Total extends Component {

render(){
  return(
    <div>
    <br/>
    Running Total of all counter values: <b>{this.props.counterTotal}</b>
    </div>
  );
  }

}

export default Total;
