import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from "redux"
import { Provider } from "react-redux";
import App from './App'
import * as redux from "redux";
import { STDCoutPost0 } from "./utils/StdCoutTerminall.js";

const defaultState = {
    variable : 0,
    array : {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_VALUE_FROM_STORE":
            return {...state, variable: state.variable }

        case "ADD_VARIABLE":
            return {...state, variable: state.variable + action.payload}

        case "RESET":
            return {...state, variable: state.variable = 0}

        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    STDCoutPost0()
    console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
