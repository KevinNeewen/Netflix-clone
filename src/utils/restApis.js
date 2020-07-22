import { getFetchData } from './fetchData'
import { TV, MOVIE } from '../constants'
const movieDbApiKey = '5d1e37a1c98f8c9c92ada6ae97c30854'
const GENRE = 'genre'
const TOP_RATED = 'top_rated'
const POPULAR = 'popular'

const getMedias = (mediaType, searchFilter, pageNumber) => {
    return getFetchData(
        `https://api.themoviedb.org/3/${mediaType}/${searchFilter}?api_key=${movieDbApiKey}&language=en-US&page=${pageNumber}`
    )
}

const getMetaData = (mediaType, metaDataType) => {
    return getFetchData(
        `https://api.themoviedb.org/3/${metaDataType}/${mediaType}/list?api_key=${movieDbApiKey}&language=en-US`
    )
}

const getDiscoverMedias = (mediaType, sortMethod, genre) => {
    return getFetchData(
        `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${movieDbApiKey}&language=en-US&sort_by=${sortMethod}&include_adult=false&include_video=false&page=1&with_genres=${genre}`
    )
}

const getTrendingMedia = mediaType => {
    return getFetchData(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${movieDbApiKey}`
    )
}

const getMediaDetails = (id, mediaType) => {
    return getFetchData(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${movieDbApiKey}&language=en-US&append_to_response=similar%2Ccredits`
    )
}

export const requestApi = {
    getMovieGenres: () => getMetaData(MOVIE, GENRE),

    getTopRatedMovies: pageNumber => getMedias(MOVIE, TOP_RATED, pageNumber),
    getPopularMovies: pageNumber => getMedias(MOVIE, POPULAR, pageNumber),
    getPopularTvShows: pageNumber => getMedias(TV, POPULAR, pageNumber),

    getPopularComedyMovies: () =>
        getDiscoverMedias(MOVIE, 'popularity.desc', '35'),
    getPopularRomanceMovies: () =>
        getDiscoverMedias(MOVIE, 'popularity.desc', '10749'),

    getTrendingMovies: () => getTrendingMedia(MOVIE),
    getTrendingTvShows: () => getTrendingMedia(TV),

    getMediaDetails: (id, mediaType) => getMediaDetails(id, mediaType),
}
