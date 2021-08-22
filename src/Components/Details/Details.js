import React from 'react';

const Details = (props) => {
    const {idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    return (
        <div>
            <h2>{idLeague}</h2>
            <h3>{strLeague}</h3>
            <h4>{strSport}</h4>
            <h4>{strLeagueAlternate}</h4>
        </div>
    );
};

export default Details;