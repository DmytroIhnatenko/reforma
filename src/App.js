// App.js
import React from 'react';
import TournamentBracket from './components/TournamentBracket';
import data from './Fights.json'; // Make sure to adjust the path

const App = () => {
   
  return (
    <div>
      <h1>Your App</h1>
      {/* Other components or layout */}
      <TournamentBracket data={data} />
      
    </div>
  
  );
    
};

export default App;
