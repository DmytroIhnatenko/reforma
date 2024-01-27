// src/components/TournamentBracket.js

import React, { useState, useEffect } from 'react';
import './TournamentBracket.css'; // Add your styling here
//import data from './Fights.json';

const TournamentBracket = (data) => {
  const [tournamentData, setTournamentData] = useState([]);

  useEffect(() => {
    // Fetch from the public URL, not by importing the file
    fetch('/Fights.json') // Adjust the path if your JSON file is nested inside another directory within public
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => {
        try { 
          console.log(text);
          const data = JSON.parse(text);
         
          setTournamentData(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
}, []);
console.log(data);
  // Function to organize matches into rounds
  const organizeRounds = () => {
    const rounds = {};
 console.log(tournamentData)
    if (tournamentData && tournamentData.length > 0) {
     
      tournamentData.forEach(({ matches }) => {
        matches.forEach(({ match_number, fighters, round, time }) => {
          if (!rounds[round]) {
            rounds[round] = [];
          }

          rounds[round].push({ match_number, fighters, time });
        });
      });
    }

    return rounds;
  };

  // Modify the generateBracket function
  const generateBracket = () => {
    const rounds = organizeRounds();

    return (
      <div className="bracket">
        {Object.keys(rounds).map((round, index) => (
          <div key={index} className="round">
            <h2>Round {round}</h2>
            {rounds[round].map(({ match_number, fighters, time }) => (
              <div key={match_number} className="match">
                <p>{`Match ${match_number}: ${fighters.join(' vs ')} (${time})`}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="tournament-bracket">
      <h1>Tournament Bracket</h1>
      {generateBracket()}
    </div>
  );
};

export default TournamentBracket;
