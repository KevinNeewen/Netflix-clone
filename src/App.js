import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlayCircle,
    faInfoCircle,
    faPlay,
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Spinner } from 'reactstrap'
import Header from './components/Header'
import HomePage from './containers/HomePage'
import './App.scss'

library.add(far, faPlayCircle, faInfoCircle, faPlay, faAngleDown)

function App() {
    const [isPageLoading, setIsPageLoading] = useState(false)

    return (
        <div className="app">
            <Header />
            {!!isPageLoading && (
                <div className="background">
                    <div className="spinner">
                        <Spinner color="danger" />
                    </div>
                </div>
            )}
            <HomePage
                isPageLoading={isPageLoading}
                setIsPageLoading={setIsPageLoading}
            />
        </div>
    )
}

export default App
