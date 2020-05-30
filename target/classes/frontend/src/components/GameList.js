import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContextProvider'
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap'

import { Link } from 'react-router-dom'

export default function GameList(props) {

  const { games, removeGame } = useContext(GameContext)

  const convertDate = (unix) => {
    return new Date(unix * 1000).toLocaleDateString("en-GB")
  }

  const list = () => {
    return games
      .sort((a, b) => a.published < b.published ? 1 : -1)
      .map((game, i) => {
      return (
        <div style={{margin: '10px 20px'}}>
          <Card key={game.title + i} body inverse className="mb-2 game-card"
            style={{
              padding: '10px 20px', 
              backgroundColor: 'lightgray',
              borderColor: 'black',
            }}> 
            <Container>
              <Row>
                <span style={{ fontSize: '2em' }}></span>
                <Col>
                  <CardTitle style={{cursor: 'pointer', fontSize: '1.4em', color: 'black', textAlign: 'center', textDecoration: 'underline'}}>{game.title}</CardTitle>
                  <CardText style={{color: 'black'}}>{game.content}</CardText>
                  <CardText style={{color: 'black', textAlign: 'end'}}>Release Date: {convertDate(game.published)}</CardText>
                </Col>
                <span onClick={() => removeGame(game.id)} style={{ cursor: 'pointer' }}>🗑️</span>
                {/* <Link className="nav-link" to="/edit-game">Edit</Link> */}
                <Link to={{ pathname: "/edit-game", state: {game} }}>Edit</Link>
              </Row>
            </Container>
          </Card>
        </div>
      )
    })
  }

  return (
    <>
      {list()}
    </>
  )
}