import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import Home from "./Home"
import Produto from "./Produto"

const ROUTES = () => (
    <Route>
        <Route path="/" component={Home} />
        <Route path="/produto" component={Produto} />
    </Route>
)

ReactDOM.render(<App />, document.getElementById('root'));
