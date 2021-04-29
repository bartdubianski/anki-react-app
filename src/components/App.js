import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import StudyNow from './StudyNow';
import Decks from './Decks';
import AddCard from './AddCard';
import PageNotFound from './PageNotFound';
import * as ROUTES from '../constants/routes';
import AnkiCard from './AnkiCard';
import CardList from './CardList';

const App = () => {

  return (
        <HashRouter>
            <Navigation />
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.STUDY_NOW} component={StudyNow} />
              <Route path={ROUTES.DECKS} component={Decks} />
              <Route path={ROUTES.ADD_CARD} component={AddCard} />
              <Route path={ROUTES.CARD} component={AnkiCard} />
              <Route path={ROUTES.CARD_LIST} component={CardList} />

              <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
  );
};

export default App;