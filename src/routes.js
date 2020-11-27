import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import Sobre from './pages/Sobre';
import Zoom from './pages/Zoom';
import Meet from './pages/Meet';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/projeto_react/Sobre" component={Sobre} />
                <Route path="/Zoom" component={Zoom} />
                <Route path="/Meet" component={Meet} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
