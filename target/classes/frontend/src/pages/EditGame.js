import React, { useState, useContext, useEffect } from 'react'
import { Button, Card, Container, Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { GameContext } from '../contexts/GameContextProvider'

function EditGame(props) {

  const [game] = useState(props.location.state.game)
  const { updateGame } = useContext(GameContext)

  //const [game, setGame] = useState('')
  
  //const { appendGame } = useContext(GameContext)
  const [newGame, setNewGame] = useState({ title: '', content: '', published: '' })

  const updateNewGame = update => setNewGame({ ...newGame, ...update })
  const printSome = (e) => {

    console.log(props.location.state)
  }

  const cancelAction = () => {
    props.history.push('/')
  }

  const convertDate = (unix) => {
    return new Date(unix * 1000).toLocaleDateString("en-GB")
  }

  const update = () => {
    //if 
    console.log(newGame.title)
    if (newGame.title.trim() == '') {
      console.log("No title")
    }

    if (newGame.content.trim() == '') {
      console.log("No content")
    }
  
    if (newGame.published.trim() == '') {
      console.log("No date")
    }
    updateGame(newGame, game.id)
    console.log(newGame.content)
    console.log(newGame.published)

    uploadChanges(newGame)
  

  }


  const uploadChanges = async (game) => {
    // let res = await update('/rest/games', {

    // })
      let res = await fetch('/rest/games', {
      method: 'UPDATE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game)
    })
    res = await res.json()
    console.log(res)
  }

  // const copyGame = () => {
  //   let game = props.location.state.game
  //   let gameCopy = Object.assign({}, game)
  //   //let gameCopy = { ...game }
  //   //let gameCopy = JSON.parse(JSON.stringify(game))
  //   setGame(gameCopy)
  // }

  useEffect(() => (
    //copyGame(),
    //setGame(props.location.state.game),
    printSome(props)

  ),[])
  // const EditGame = async (e) => {
  //   e.preventDefault()
    
  //   if (!title.trim() || !content.trim() || published == undefined) {
  //     return 
  //   }

  //   const game = {
  //     title,
  //     content,
  //     published
  //   }

  //   game.published = new Date(published).getTime() / 1000 // Convert date.releaseDate to timestamp (unix) 

  //   console.log("Game added: ", game)
  //   console.log(typeof game.published)

  //   // send new game to backend
  //   let res = await fetch('/rest/games', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(game)
  //   })
  //   res = await res.json()
  //   console.log(res)

  //   appendGame(game)

  //   setTitle('')
  //   setContent('')
  //   setPublished(undefined)

  //   props.history.push('/')
  // }

  return (
    <div>
      <Card>
        <Container>
              <Row>
                <span style={{ fontSize: '2em' }}></span>
                <Col>
                  <CardTitle style={{cursor: 'pointer', fontSize: '1.4em', color: 'black', textAlign: 'center', textDecoration: 'underline'}}>{game.title}</CardTitle>
                  <CardText style={{color: 'black'}}>{game.content}</CardText>
                  <CardText style={{color: 'black', textAlign: 'end'}}>Release Date: {convertDate(game.published)}</CardText>
                </Col>
              </Row>
            </Container>
      </Card>
      <h3>Edit Details</h3>
      <Form>
        <FormGroup>
            <Label for="game-title">Title</Label>
          <Input required type="text" id="game-title" placeholder={game.title} value={newGame.title}
            onChange={e => updateNewGame({ title: e.target.value })} />
        </FormGroup>
          <FormGroup className="col-sm-12 col-md-8 col-lg-6">
          <Label for="game-content">Content</Label>
          <Input required type="text" id="game-content" placeholder={game.content} value={newGame.content}
            onChange={e => updateNewGame({ content: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label for="game-date">Release Date</Label>
          <Input required type="date" id="game-release" placeholder="DD/MM/YYYY" onfocus={game.published} value={newGame.published}
            onChange={e => updateNewGame({ published: e.target.value })}/>
        </FormGroup>
        <Button onClick={() => update()}>Update</Button>
      </Form>
      <h1>Edit Game</h1>
      <h3>Sometings</h3>
      <Button onClick={() => cancelAction()}>Cancel</Button>
    </div>
  )
}

export default withRouter(EditGame)