import { fetch } from 'whatwg-fetch'

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

const parseJSON = response => {
    return response.json()
}

export const getFetchData = url => {
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
}
