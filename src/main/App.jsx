import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Menu from '../components/template/Menu'
import Routes from './Routes'
import Rodape from '../components/template/Rodape'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Menu />
            <Routes />
            <Rodape />
        </div>
    </BrowserRouter>