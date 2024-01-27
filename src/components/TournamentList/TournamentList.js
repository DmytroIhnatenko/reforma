import React from 'react';
import './TournamentList.css';

const TournamentList = ({ tournaments, onSelectTournament }) => {
  return (
    <div className="tournament-list">
      <h2>Select a Tournament:</h2>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.name} onClick={() => onSelectTournament(tournament.name)}>
            {tournament.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
