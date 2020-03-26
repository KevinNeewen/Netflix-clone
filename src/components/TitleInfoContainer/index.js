import React from 'react'
import { Button } from 'reactstrap'
import './titleInfoContainer.scss'

function TitleInfoContainer() {
    return (
        <div className="Title-info-container">
            <h1>Sonic the HedgeHog</h1>
            <Button>Play</Button>
            <Button>More Info</Button>
            <p>
                Based on the global blockbuster videogame franchise from Sega,
                Sonic the Hedgehog tells the story of the world’s speediest
                hedgehog as he embraces his new home on Earth.
            </p>
        </div>
    )
}

export default TitleInfoContainer
