import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import Produto from "./Produto"

import {Provider} from "react-redux"
import {createStore} from "redux"
import reducers from "./Reducers"

const store = createStore(reducers);

const Routes = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/produto" component={Produto} title="Cama casal..."/>
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
