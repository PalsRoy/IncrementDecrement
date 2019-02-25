import React, { Component } from 'react';
import './App.css';
import Counter from './counter';
import Total from './total';

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state={globalData:data,
                counterTotal:0};
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(incValue){
    let newGlobalData = this.state.globalData.slice();//creates a new array of objects
    newGlobalData[incValue-1]={id:incValue,value:(this.state.globalData[incValue-1].value + incValue)};//create a new object.
    this.setState({globalData:newGlobalData});//say 'no' to mutation.
    let sum = newGlobalData.reduce((total,obj) => total + obj.value, 0);
    this.setState({counterTotal:sum});
  }

  onDecrement(decValue){
    let newGlobalData = this.state.globalData.slice();//creates a new array of objects
    newGlobalData[decValue-1]={id:decValue,value:(this.state.globalData[decValue-1].value - decValue)};//create a new object.
    this.setState({globalData:newGlobalData});//say 'no' to mutation.
    let sum = newGlobalData.reduce((total,obj) => total + obj.value, 0);
    this.setState({counterTotal:sum});
  }

  render() {
    const{ globalData } = this.state;
    return (
      <div>
        {globalData.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onIncrease={()=> this.onIncrement(counter.id)}
            onDecrease={()=> this.onDecrement(counter.id)}
            />
        ))}
        <Total counterTotal={this.state.counterTotal}/>
      </div>
    );
  }
}

export default App;
