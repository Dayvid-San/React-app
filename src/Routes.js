import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import Personagem from './Personagem'

export default function Routes() {
    return (
        <Router>
            <Route exact path='/' component={App}/>
            <Router path='/personagem/:id' component={Personagem} />
        </Router>
    )
}
