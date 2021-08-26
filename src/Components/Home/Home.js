import React, { useEffect } from 'react';
import { useState } from 'react';
import Details from '../Details/Details';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setLeagues(data.leagues))
    },[])
    return (
        <div>
            
            {
                leagues.map(league=> <Details league={league}></Details>)
            }
        </div>
    );
};

export default Home;