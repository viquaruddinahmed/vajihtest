import React, { useState } from 'react';
import './playerList.css';
import { Card } from '../playerCard/playerCard';

export const PlayerList = (props) => {
    const [listPlayers, setListPlayers] = useState(props.players)
    
    const [sorted, setSorted] = useState('')
    const sorting = e => {
        let sortingBy = e.target.value
        setSorted(sortingBy)
    }
    const filteredPlayers = listPlayers.filter((item) => {
        return item.Joueur.toLowerCase().includes(props.searchTerm.toLowerCase())
    })
    const handleRemovePlayer = (nom) => {
        let newList = listPlayers.filter((item) => item.Joueur !== nom)
        setListPlayers (newList)
        console.log('handleRemovePlayer',nom)
    }
    return (
        <div>
            <div className="sorting-section">
                <select onChange={sorting} className="sorting">
                    <option>All Players</option>
                    <option value="best">Best Players</option>
                    <option value="average">Average Players</option>
                </select>
            </div>
            <div className='player-list'>
                {
                    filteredPlayers.sort((a, b) => {
                        if (sorted === "best") {
                            return a.Passes_Reuisses < b.Passes_Reuisses ? 1 : -1 
                        } else if (sorted === "average") {
                            return a.Passes_Reuisses > b.Passes_Reuisses ? 1 : -1 
                        }
                        return 0
                    }).map((item) => (
                        <Card key={item.Joueur} item={item} removePlayer={handleRemovePlayer} />
                    ))
                }
            </div>
        </div>
    )
}