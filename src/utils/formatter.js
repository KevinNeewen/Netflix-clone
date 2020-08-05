export const formatDate = date => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!!date && date.match(dateRegex)) {
        return date.replace(/-\d{2}-\d{2}$/, '')
    }
    return date
}
