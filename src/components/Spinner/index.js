import React from 'react'
import { Spinner as StrapSpinner } from 'reactstrap'
import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner">
            <StrapSpinner color="danger" />
        </div>
    )
}

export default Spinner
