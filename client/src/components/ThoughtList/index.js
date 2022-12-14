import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Opinions Yet</h3>;
  }

  const loggedIn = auth.loggedIn();

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <h4><Link
                to={loggedIn ?`/artist/${thought.artistName}` : "/login"}
                style={{ fontWeight: 700 }}
                className="opinion-title"
              >
                Opinions on {thought.artistName}
              </Link>
            </h4>
            <p className="card-header">
              <Link 
                to={loggedIn ?`/profile/${thought.username}` : "/login"}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username}
              </Link>{' '}
              {thought.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0">
                  Comments: {thought.reactionCount} · Click to {' '}  
                  {thought.reactionCount ? 'continue' : 'start'} talking!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
