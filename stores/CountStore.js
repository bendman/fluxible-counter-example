import BaseStore from 'fluxible/addons/BaseStore';

export default class CountStore extends BaseStore {

    static storeName = 'CountStore'

    static handlers = {
        'INCREMENT': 'handleIncrement',
        'DECREMENT': 'handleDecrement',
        'INCREMENT_IF_ODD': 'handleIncrementIfOdd'
    }

    constructor(dispatcher) {
        super(dispatcher);
        this.count = 0;
    }
    getCount() {
        return this.count;
    }
    handleIncrement() {
        this.count = this.count + 1;
        this.emitChange();
    }
    handleDecrement() {
        this.count = this.count - 1;
        this.emitChange();
    }
    handleIncrementIfOdd() {
        if (this.count % 2) {
            this.handleIncrement();
        }
    }
    dehydrate() {
        return {
            count: this.count
        };
    }
    rehydrate(state) {
        this.count = state.count;
    }
}
