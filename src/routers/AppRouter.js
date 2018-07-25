import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header'
import Homepage from '../components/HomePage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioPage from '../components/PortfolioPage'
import PortfolioItemPage from '../components/PortfolioItemPage'



const AppRouter = () => (
    <BrowserRouter>
        <Fragment> 
            <Header />

        <Switch>

        <Route path='/' component={Homepage} exact/>
        <Route path='/portfolio' component={PortfolioPage} exact/>
        <Route path='/portfolio/:id' component={PortfolioItemPage}/>
        <Route path='/contact' component={ContactPage}/>
        
        <Route component={NotFoundPage}/>
        </Switch>

        </Fragment>
    </BrowserRouter>
);

export default AppRouter;