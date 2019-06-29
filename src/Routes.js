import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home'
import Manual from './containers/Manual';
import ManualVC from './containers/ManualVC'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Manual' component={Manual}/>
            <Route path='/ManualVC' component={ManualVC}/>
        </Switch>
    );
}

export default Routes;