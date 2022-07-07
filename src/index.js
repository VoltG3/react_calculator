import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from "redux"
import { Provider } from "react-redux";
import App from './App'

const defaultState = {
    variable : 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_VARIABLE":
            return {...state, variable: state.variable + action.payload}

        case "RESET":
            return {...state, variable: state.variable = 0}

        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
