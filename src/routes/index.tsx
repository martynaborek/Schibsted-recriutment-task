import React, {Suspense, lazy} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../history';

import Loader from '../components/atoms/Loader/Loader';
import Error from '../components/organisms/Error/Error'
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';

const Articles = lazy(() => import('../components/organisms/Articles/Articles'))

const Routes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Articles}/>
                    <Route exact path="/*" component={Error}/>
                </Switch>
                <Footer/>
            </Router>
        </Suspense>
    );
}

export default Routes;