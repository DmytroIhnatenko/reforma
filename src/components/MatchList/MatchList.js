import React from 'react';
import './MatchList.css';

const MatchList = ({ matches, onSelectMatch }) => {
  return (
    <div className="match-list">
      <h2>Select a Match:</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.match_number} onClick={() => onSelectMatch(match.match_number)}>
            Match {match.match_number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
