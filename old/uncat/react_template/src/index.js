const Redux = ReactRedux;
const React = React;
const ReactDOM = ReactDOM;
const ReactRouter = ReactRouter;

// ReactRouter { Link, NavLink, Route, Switch, Redirect, browserHistory, BrowserRouter } ;
// React { useCallback, useContext, useDebugValue, useEffect, useMemo, useReducer, useRef, useState }


const increment = () => ({
    type: 'INCREMENT',
});

const zero = () => ({
    type: 'ZERO',
});

const counter = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
};

const store = Redux.createStore(counter);

const App = () => {
    return (
        <Provider store={store}>
            <Button store={store}/>
        </Provider>
    );
};

const Button = () => {
    store = props.store;
    // <h2>{store.}</h2>
    return (
        <React.Fragment>
            <button onClick={()=>store.dispatch(increment())}>increment</button>
            <button onClick={()=>store.dispatch(zero())}>zero counter</button>
        </React.Fragment>
    )
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
