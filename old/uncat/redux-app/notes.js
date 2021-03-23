// BASIC
const redux     = require('redux')
const initState = { counter: 0 }
const reducer   = (state = initState, action) => { ... }
const store     = redux.createStore(reducer); // store intance
store.dispatch({ type: 'INCREMENT' });        // dispatch action
store.subscribe(() => { ... });               // middleware

// REACT REDUX WRAPPER
import { Provider } from 'react-redux'
<Provider store = {...}> ...

// REACT REDUX COMPONENT
import { connect } from 'react-redux'
const Component = ...
const mapProps    = (storeState) => ({/*component state*/})
const mapDispatch = (dispatch)   => ({/*update: () => dispatch(...)*/})
export connect(mapProps, mapDispatch)(Component) // component built w/ store

// REACT REDUX HOOKS
import { useDispatch, useSelector } from "react-redux";
export const Component = () => {
  const foo = useSelector(state => state.foo);
  const dispatch = useDispatch();
  return ( <button onClick={() => dispatch(...)} />
};

// API
connect()
useSelector(selector): field           // selector: (state) => field
createSelector(selector...): selector // returns memoized selector
useDispatch(): dispatch function
useStore(): store                     // returns store provided by Provider
    // elements does not update if store updates

// TYPESCRIPT

