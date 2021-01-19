import React, {Suspense, lazy} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../history';

import Error from '../components/molecules/Error/Error'
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import Loader from '../components/atoms/Loader';

const Articles = lazy(() => import('../components/organisms/Articles/Articles'))

const Routes = () => {
    return (
        <Suspense fallback={<Loader fillContainer/>}>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Articles}/>
                    <Route exact path="/*" component={() => <Error fillContainer/>}/>
                </Switch>
                <Footer/>
            </Router>
        </Suspense>
    );
}

export default Routes;