import React, { PropTypes } from 'react';
import CountStore from '../stores/CountStore';
import connectToStores from 'fluxible-addons-react/connectToStores';
import { increment, decrement, incrementIfOdd } from '../actions/CountActionCreators';

class Counter extends React.Component {

  static contextTypes = {
    executeAction: PropTypes.func.isRequired
  }

  render() {
    const count = this.props.count;

    return (
      <div>
        <p>This counter provides an example of actions.</p>
        <p>
          Clicked: {count} times
          {' '}
          <button onClick={this.increment.bind(this)}>+</button>
          {' '}
          <button onClick={this.decrement.bind(this)}>-</button>
          {' '}
          <button onClick={this.incrementIfOdd.bind(this)}>+ if odd</button>
        </p>
      </div>
    );
  }

  increment() {
    this.context.executeAction(increment);
  }

  decrement() {
    this.context.executeAction(decrement);
  }

  incrementIfOdd() {
    this.context.executeAction(incrementIfOdd);
  }

}

Counter = connectToStores(Counter, [CountStore], (context, props) => ({
  count: context.getStore(CountStore).getCount()
}));

export default Counter;
