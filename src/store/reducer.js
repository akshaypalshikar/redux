const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'ADD':
            newState.counter += action.payload.value;
            break;
        case 'SUBTRACT':
            newState.counter -= action.payload.value;
            break;
        case 'SAVE':
            newState = {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.payload.value })
            }
            break;
        case 'DELETE':
            newState = {
                ...state,
                results: state.results.filter(result => result.id !== action.payload.id)
            }
            break;
        default:
    }
    console.log(newState);
    return newState;
};
export default reducer;