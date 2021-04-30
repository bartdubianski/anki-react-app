import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Navigation from './Navigation';
import Home from './Home';
import StudyNow from './StudyNow';
import CardForm from './CardForm';
import PageNotFound from './PageNotFound';
import CardList from './CardList';
import Sandbox from './Sandbox';
const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.STUDY_NOW} component={StudyNow} />
                <Route path={ROUTES.CARD_FORM} component={CardForm} />
                <Route path={ROUTES.CARD_LIST} component={CardList} />
                <Route path={ROUTES.SANDBOX} component={Sandbox} />
                <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
    );
};
export default App;