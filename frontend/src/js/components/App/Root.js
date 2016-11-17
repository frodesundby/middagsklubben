import React, {Component} from 'react';
import {Router} from 'react-router'
import getRoutes from '../../routes'


module.exports = class Root extends Component {
    render() {
        return (
            <div>
                <Router>
                    {getRoutes()}
                </Router>
            </div>
        );
    }
};