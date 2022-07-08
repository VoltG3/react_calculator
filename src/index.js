import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App'
import * as redux from "redux";

const defaultState = {
    variable : 0,
    array : {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_VARIABLE":
            return {...state, variable: state.variable + action.payload}

        case "VARIABLE_IS_VARIABLE":
            return {...state, variable: state.variable = action.payload}

        case "ADD_TO_ARRAY":
            return {...state, array: state.array = action.payload}

        case "RESET_VARIABLE":
            return {...state, variable: state.variable = 0}

        case "RESET_ARRAY":
            return {...state, array: state.array = {}}

        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    // console.log("[ POST 0 ] - STATUS")
    // console.table(store.getState())
    // console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
