import React from 'react';
import './SelectedMatch.css';

const SelectedMatch = ({ selectedMatch }) => {
  return (
    <div className="selected-match">
        <h2 className="selected-match__title">Selected Match:</h2>
        <p>
            <span>Match Number:</span> {selectedMatch.match_number}
        </p>
        {selectedMatch.winner ? (
        <p>
            <span className='selected-match__winner'>Winner: {selectedMatch.winner}</span>
        </p>
        ) : (
            null
        )}
        <p>
            <span>Fighters:</span> {selectedMatch.fighters.join(' VS ')}    
        </p>
        <p>
            <span>Stage:</span> {selectedMatch.stage}
        </p>
        <p>
            <span>Time:</span> {selectedMatch.time}
        </p>
</div>

  );
};

export default SelectedMatch;
