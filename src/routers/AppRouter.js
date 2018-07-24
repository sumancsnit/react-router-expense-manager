import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header'
import Homepage from '../components/HomePage'
import Contactpage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'



const AppRouter = () => (
    <BrowserRouter>
        <Fragment> 
            <Header />

        <Switch>

        <Route path='/' component={Homepage} exact/>
        <Route path='/portfolio' component={Homepage}/>
        <Route path='/portfolio/123' component={Homepage}/>
        <Route path='/contact' component={Contactpage}/>
        
        <Route component={NotFoundPage}/>
        </Switch>

        </Fragment>
    </BrowserRouter>
);

export default AppRouter;