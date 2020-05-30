import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import GameContextProvider from './contexts/GameContextProvider'

import Home from './pages/Home'
import NewGame from './pages/NewGame'
import EditGame from './pages/EditGame'
import TopNavbar from './components/TopNavbar'

function App() {


  return (
    <div className="App">
      <GameContextProvider>
        <Router>
          <TopNavbar />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/new-game" component={NewGame} />
            <Route exact path="/edit-game" component={EditGame} />
          </main>
        </Router>
      </GameContextProvider>
    </div>
  );
}

export default App;
