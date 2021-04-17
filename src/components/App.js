import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';
import StudyNow from './StudyNow';
import Decks from './Decks';
import AddCard from './AddCard';
import Account from './Account';
import Admin from './Admin';
import PageNotFount from './PageNotFount';
import * as ROUTES from '../constants/routes';
import { withFirebase } from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
 
  componentWillUnmount() {
    this.listener();
  }
  
  render() {
    return (
      <HashRouter>
          <Navigation authUser={this.state.authUser} />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route path={ROUTES.STUDY_NOW} component={StudyNow} />
            <Route path={ROUTES.DECKS} component={Decks} />
            <Route path={ROUTES.ADD_CARD} component={AddCard} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route component={PageNotFount} />
          </Switch>
      </HashRouter>
    );
  }
}

export default withFirebase(App);