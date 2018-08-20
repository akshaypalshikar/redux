const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//reducer
const rootReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            newState.counter++;
            break;
        case 'ADD_COUNTER':
            newState.counter += action.value;
            break;
        default:
    }
    return newState;
};

//store
const store = createStore(rootReducer);

//suscription
store.subscribe(() => {
    console.log('store.subscribe', store.getState());
});

//dispatching action
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
