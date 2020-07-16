export const buildImageUrl = (path, size) => {
    return path === null
        ? '/images/fallbackImage.jpg'
        : `https://image.tmdb.org/t/p/${size}//${path}`
}
