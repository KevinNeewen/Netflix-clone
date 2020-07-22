import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './titleInfoContainer.scss'

function TitleInfoContainer() {
    return (
        <div className="title-info-container">
            <h1>Sonic the HedgeHog</h1>
            <p>
                Based on the global blockbuster videogame franchise from Sega,
                Sonic the Hedgehog tells the story of the world’s speediest
                hedgehog as he embraces his new home on Earth.
            </p>
            <Button>
                <FontAwesomeIcon icon={['fas', 'play']} />
                <span>Play</span>
            </Button>
            <Button>
                <FontAwesomeIcon icon="info-circle" />
                <span>More Info</span>
            </Button>
        </div>
    )
}

export default TitleInfoContainer
