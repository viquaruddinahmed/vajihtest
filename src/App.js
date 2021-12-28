import React, { useState } from 'react';
import './App.css';
import { PlayerList } from './components/playerList/playerList';
import { Players } from './components/db';
import { AddPlayer } from './components/addPlayer/addPlayer';
import { Createteams } from './components/createteams/createteams';

const App = (props) => {

  const [players , setPlayers] = useState(Players);
  const [searchField, setSearchField] = useState('');
  const [playerModal, setPlayerModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);

  const manageState = () => {
    setPlayerModal(!playerModal)
  }
  const handleCloseModal = () => {
    setPlayerModal(false)
}

const manageState1 = () => {
  setTeamModal(!teamModal)
}
const handleCloseModal1 = () => {
  setTeamModal(false)
}

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  return (
    <div className="App">
      <h1>Football Players List</h1>
      <input 
        type='search' 
        placeholder={"search players"} 
        onChange={handleChange} 
        className='search'
      />
      <button onClick={() => manageState()}>Add Player</button>
      <button onClick={() => manageState1()}>Create 2 Teams</button>
      <AddPlayer modalState={playerModal} handleCloseModal={handleCloseModal} data={props} />
      <Createteams modalState={teamModal} handleCloseModal={handleCloseModal1} data={props} />
      <PlayerList players={players} searchTerm={searchField}  />
    </div>
  );
}

export default App;