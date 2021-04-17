import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
 
import '../../styles/navigation.scss';

const Navigation = ({ authUser }) => (
  <div className="Navigation">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
 
const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Welcome</Link>
    </li>
    <li>
      <Link to={ROUTES.STUDY_NOW}>Study Now</Link>
    </li>
    <li>
      <Link to={ROUTES.DECKS}>Manage Decks</Link>
    </li>
    <li>
      <Link to={ROUTES.ADD_CARD}>Quick Add New Card</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Welcome</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
 
export default Navigation;