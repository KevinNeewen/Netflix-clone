import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlayCircle,
    faInfoCircle,
    faPlay,
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Header from './components/Header'
import HomePage from './containers/HomePage'
import './App.scss'

library.add(far, faPlayCircle, faInfoCircle, faPlay, faAngleDown)

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
        </div>
    )
}

export default App
