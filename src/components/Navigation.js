import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
 
const Navigation = () => (
  <div className="Navigation">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Welcome</Link>
      </li>
      <li>
        <Link to={ROUTES.STUDY_NOW}>Study Now</Link>
      </li>
      <li>
        <Link to={ROUTES.CARD_LIST}>Manage Cards</Link>
      </li>
      <li>
        <Link to={ROUTES.ADD_CARD}>Quick Add Card</Link>
      </li>
    </ul>
  </div>
);
 
export default Navigation;