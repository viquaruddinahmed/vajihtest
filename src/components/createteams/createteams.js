import React from 'react';
import './createteam.css';
import { Players } from '../db';
import Modal from 'react-modal';
import { Card } from '../playerCard/playerCard';

export const Createteams = (props) => {
    
    return (
            <Modal
            isOpen={props.modalState} 
            contentLabel="player statistics" 
            ariaHideApp={false} 
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
            className="player--modal"
            >
            <div>
                <h4>Winner of teams </h4>
                <form className='form'>
                    <div>
                        <div>
                        <h2>Team 1</h2>
                        {
                    Players.slice(0,9).map((item) => (
                        <Card key={item.Joueur} item={item}/>
                    ))
                }
                        </div>

                        <div>
                        <h2>Team 2</h2>
                        {
                    Players.slice(10,19).map((item) => (
                        <Card key={item.Joueur} item={item}/>
                    ))
                }
                        </div>
                    </div>
                </form>
            </div>
            </Modal>
    )
}
