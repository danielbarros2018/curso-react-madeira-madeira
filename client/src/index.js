import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import Produto from "./Produto"

const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/produto" component={Produto} title="Cama casal..."/>
        </div>
    </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
