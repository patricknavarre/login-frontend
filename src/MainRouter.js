import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home"

const MainRouter = (props) => {    
        return (
            <Router>
                <Switch>
                    <Router path="/" component={Home} />
                </Switch>
            </Router>
        )
    }


export default MainRouter
