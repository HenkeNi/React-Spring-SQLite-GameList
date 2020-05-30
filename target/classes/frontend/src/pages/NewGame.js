import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { GameContext } from '../contexts/GameContextProvider'
import { withRouter } from 'react-router-dom'

function NewGame(props) {

  const { appendGame } = useContext(GameContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState()


  const addGame = async (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim() || published == undefined) {
      return 
    }

    const game = {
      title,
      content,
      published
    }

    game.published = new Date(published).getTime() / 1000 // Convert date.releaseDate to timestamp (unix) 

    console.log("Game added: ", game)
    console.log(typeof game.published)

    // send new game to backend
    let res = await fetch('/rest/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game)
    })
    res = await res.json()
    console.log(res)

    appendGame(game)

    setTitle('')
    setContent('')
    setPublished(undefined)

    props.history.push('/')
  }

  return (
    <div>
      <h1>Add New Game</h1>
      <Form onSubmit={addGame} className="row">
        <FormGroup className="col-sm-12 col-md-8 col-lg-6">
          <Label for="game-title">Title</Label>
          <Input required type="text" id="game-title" placeholder="enter title..." value={title} 
            onChange={ e => setTitle(e.target.value)} />
        </FormGroup>
        <FormGroup className="col-sm-12 col-md-8 col-lg-6">
          <Label for="game-content">Content</Label>
          <Input required type="text" id="game-content" placeholder="about the game..." value={content}
            onChange={e => setContent(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="game-date">Release Date</Label>
          <Input required type="date" id="game-release" value={published}
            onChange={e => setPublished(e.target.value)}/>
        </FormGroup>
        <Button color="info" className="ml-3">Add Game</Button>
      </Form>
    </div>
  )
}

export default withRouter(NewGame)