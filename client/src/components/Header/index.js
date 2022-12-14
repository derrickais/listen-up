import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import capitalizeFirstLetter from '../../utils/capFirstLetter';

const Header = () => {
  const username = Auth.loggedIn() ? Auth.getProfile().data.username : '';
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>ListenUp</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/artists">View Artists</Link>
              <Link to={`/profile/${username}`}> {capitalizeFirstLetter(username)}'s Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/artists">View Artists</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
