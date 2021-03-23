const redux = require('redux')

// INITIAL STATE
const initialState = {
    counter: 0
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload
            };
        default:
        // returns old state state
        return state
    }
}


// STORE
const store = redux.createStore(reducer);

// SUBSCRIPTION / GET STATE
store.subscribe(() => {
    console.log(store.getState());
})

// DISPATCH ACTION
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'ADD', payload: 5 })






































































































