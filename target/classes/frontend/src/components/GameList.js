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
        <div style={{margin: '5px 20vw', paddingTop: '10px'}}>
          <Card key={game.title + i} body inverse className="mb-2 game-card"
            style={{
              padding: '10px 5px',
              backgroundColor: 'rgb(10, 20, 10, 0.4)',
              borderColor: '#559',
            }}> 
            <Container>
              <Row>
                <span style={{ fontSize: '2em' }}></span>
                <Col>
                  <CardTitle style={{
                    cursor: 'pointer', fontSize: '1.4em', color: 'lightblue', textAlign: 'center', textDecoration: 'underline', textTransform: 'capitalize'}}>{game.title}</CardTitle>
                  <div style={{}}>
                    <CardText style={{ color: 'rgb(200, 90, 40)' }}>{game.content}</CardText>
                    <CardText style={{ color: 'rgb(30, 10, 10)', textAlign: 'end' }}>Release Date: {convertDate(game.published)}
                      <span style={{ marginLeft: '10px' }} onClick={() => removeGame(game.id)} style={{ cursor: 'pointer' }}> 🗑️</span>
                    </CardText>
                  </div>
                </Col>
                {/* <Link className="nav-link" to="/edit-game">Edit</Link> */}
                {/* <Link to={{ pathname: "/edit-game", state: {game} }}>Edit</Link> */}
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