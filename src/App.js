import React, { useState, useEffect } from 'react';
import TournamentApp from './components/TournamentApp/TournamentApp';

const App = () => {
  const [tournamentData, setTournamentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fights.json');
        const data = await response.json();
        setTournamentData(data.tournaments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='app-title'>Reforma Cup</h1>
      <TournamentApp tournamentsData={tournamentData} />
    </div>
  );
};

export default App;
