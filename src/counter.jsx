import React, {Component} from 'react';
import './styles.css';


class Counter extends Component {

  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={() => this.props.onDecrease()}>-</button>
          <button className="button is-success is-small" onClick={() => this.props.onIncrease()}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
