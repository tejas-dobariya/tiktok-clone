import React from 'react'
import "./VideoFooter.css"
import CatchingPokemonRoundedIcon from '@mui/icons-material/CatchingPokemonRounded';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

import record from './record.png'

function Videofooter({channel,description,song}) {
    return (
        <div className="videoFooter"> 
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth" >
                        {({ index }) => (
                            <>
                                <p>{song}</p>                              
                            </>
                        )}
                    </Ticker>
                </div>
                
               
            </div>
            <img src={record} className="videoFooter__record" />
        </div>
    )
}

export default Videofooter
