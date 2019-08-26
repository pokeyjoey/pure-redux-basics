import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';


function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  //state = { count: 0}

  increment = () => {
    /*this.setState({
      count: this.state.count + 1
    });*/
    this.props.dispatch(increment());
  }

  decrement = () => {
    /*this.setState({
      count: this.state.count - 1
    });*/
    this.props.dispatch(decrement());
  }

  reset = () => {
    /*this.setState({
      count: this.state.count - 1
    });*/
    this.props.dispatch(reset());
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
