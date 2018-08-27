const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

//reducer
const rootReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'INC':
            newState.counter++;
            break;
        case 'DESC':
            newState.counter--;
            break;
        case 'ADD':
            newState.counter += action.payload.number;
            break;
        case 'SUBTRACT':
            newState.counter -= action.payload.number;
            break;
        default:
    }
    return newState;
};

//store
const store = createStore(rootReducer);

//subscription
store.subscribe(() => {
    console.log('store.subscribe-callback state :', store.getState());
});

//dispatcher
store.dispatch({ type: 'INC' });

store.dispatch({
    type: 'ADD',
    payload: { number: 5 }
});

store.dispatch({
    type: 'SUBTRACT', payload: {
        number: 5
    }
});


store.dispatch({ type: 'DESC' });
