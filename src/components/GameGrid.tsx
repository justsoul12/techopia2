import React , { useState } from 'react'
import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}


interface FetchGamesResponse {
    count: number

}
const GameGrid = () => {

    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        apiClient.get('/games')
            .then(res=> setGames())
    })

  return (
    <div></div>
  )
}

export default GameGrid