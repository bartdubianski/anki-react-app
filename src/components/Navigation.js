import React from 'react';
import { Link } from 'react-router-dom';

import SignOut from './SignOut';
import * as ROUTES from '../constants/routes';

const Navigation = ({ authUser }) => (
  <div className="Navigation">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
 
const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Welcome</Link>
    </li>
    <li>
      <Link to={ROUTES.STUDY_NOW}>Study Now</Link>
    </li>
    <li>
      <Link to={ROUTES.DECKS}>Manage Decks</Link>
    </li>
    <li>
      <Link to={ROUTES.ADD_CARD}>Quick Add Card</Link>
    </li>
    <SignOut />
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Welcome</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
 
export default Navigation;