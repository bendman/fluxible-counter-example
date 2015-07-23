import CountStore from '../stores/CountStore';

const ActionCreators = {

  increment(context, payload, done) {
    context.dispatch('INCREMENT');
    done();
  },

  decrement(context, payload, done) {
    context.dispatch('DECREMENT');
    done();
  },

  incrementIfOdd(context, payload, done) {
    context.dispatch('INCREMENT_IF_ODD');
    done();
  }

}

export default ActionCreators;
