import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Pegawai from './pages/pegawai'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
    </Switch>
)

export default Pages
