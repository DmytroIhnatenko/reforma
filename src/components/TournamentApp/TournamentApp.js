// TournamentApp.js
import React, { useState, useEffect } from 'react';
import TournamentList from '../TournamentList/TournamentList';
import MatchList from '../MatchList/MatchList';
import SelectedMatch from '../SelectedMatch/SelectedMatch';
import './TournamentApp.css';

const TournamentApp = ({ tournamentsData }) => {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleSelectTournament = (tournamentName) => {
    setSelectedTournament(tournamentsData.find((tournament) => tournament.name === tournamentName));
    setSelectedMatch(null);
  };

  const handleSelectMatch = (matchNumber) => {
    setSelectedMatch(selectedTournament.matches.find((match) => match.match_number === matchNumber));
  };

  return (
    <div className="tournament-app">
      <TournamentList tournaments={tournamentsData} onSelectTournament={handleSelectTournament} />
      {selectedTournament && <MatchList matches={selectedTournament.matches} onSelectMatch={handleSelectMatch} />}
      {selectedMatch && <SelectedMatch selectedMatch={selectedMatch} />}
    </div>
  );
};

export default TournamentApp;
