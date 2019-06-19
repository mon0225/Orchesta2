import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Manual from './containers/Manual';
import Glosario from './containers/Glosario'

const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={Manual}/>
            <Route path='/Glosario' component={Glosario}/>
        </Switch>
    );
}

export default Routes;