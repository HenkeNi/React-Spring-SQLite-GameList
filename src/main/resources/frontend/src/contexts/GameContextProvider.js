import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext()

export default function GameContextProvider(props) {
  const [games, setGames] = useState([])

  const appendGame = (game) => {
    setGames([...games, game])
  }

  const removeGame = id => {
    setGames(games.filter(r => r.id !== id))

    fetch('/rest/games/' + id, {
      method: 'DELETE'
    })
  }

  // const updateGame = (game, id) => {
  //   setGames(games.filter(r => r.id !== id))

  //   setGames([...games, game])
  // }

  const fetchGames = async () => {
    let res = await fetch('/rest/games')
    res = await res.json()
    setGames(res)
  }

  // Will run once, when context is loaded (fetch data here)
  useEffect(() => {
    fetchGames()
  }, []) 

  const values = {
    games,
    appendGame,
    removeGame,
    //updateGame
  }

  return (
    <GameContext.Provider value={values}>
      {props.children}
    </GameContext.Provider>
  )

}