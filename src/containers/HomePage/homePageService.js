import { requestApi } from '../../utils/restApis'
import {
    TRENDING_MOVIES,
    POPULAR_MOVIES,
    TOP_RATED_MOVIES,
    POPULAR_TV_SHOWS,
    TRENDING_TV_MOVIES,
    COMEDY_MOVIES,
    ROMANCE_MOVIES,
} from '../constants'

import { MOVIE, TV } from '../../constants'

const categoryToGetMovieDictionary = () => {
    return [
        {
            category: TRENDING_MOVIES,
            mediaType: MOVIE,
            request: requestApi.getTrendingMovies(),
        },
        {
            category: POPULAR_MOVIES,
            mediaType: MOVIE,
            request: requestApi.getPopularMovies(2),
        },
        {
            category: TOP_RATED_MOVIES,
            mediaType: MOVIE,
            request: requestApi.getTopRatedMovies(1),
        },
        {
            category: POPULAR_TV_SHOWS,
            mediaType: TV,
            request: requestApi.getPopularTvShows(1),
        },
        {
            category: TRENDING_TV_MOVIES,
            mediaType: TV,
            request: requestApi.getTrendingTvShows(),
        },
        {
            category: COMEDY_MOVIES,
            mediaType: MOVIE,
            request: requestApi.getPopularComedyMovies(1),
        },
        {
            category: ROMANCE_MOVIES,
            mediaType: MOVIE,
            request: requestApi.getPopularRomanceMovies(1),
        },
    ]
}

export const getAllHomePageApiRequests = () => {
    var titleToMovieDict = categoryToGetMovieDictionary()
    return titleToMovieDict.map(o => o.request)
}

export const getAllHomePageCategoryTitles = () => {
    var titleToMovieDict = categoryToGetMovieDictionary()
    return titleToMovieDict.map(o => o.category)
}

export const getAllHomePageCategoryMediaType = () => {
    var titleToMovieDict = categoryToGetMovieDictionary()
    return titleToMovieDict.map(o => o.mediaType)
}

export const addTitleAndMapGenreToAllMedia = (genres, response) => {
    var titles = getAllHomePageCategoryTitles()
    var mediaType = getAllHomePageCategoryMediaType()
    return response.map((mediasPerCategory, index) => {
        return {
            mediasPerCategory: convertAllMediaGenreIdsToName(
                mediasPerCategory.results,
                genres
            ),
            mediaType: mediaType[index],
            categoryTitle: titles[index],
        }
    })
}

export const setPosterSizeForMediaRow = (medias, category) =>
    medias.map(media => ({
        ...media,
        isPoster: media.categoryTitle === category,
    }))

const convertMediaGenreIdsToName = (genreId, genreIdToNameMap) => {
    let genreNames = []
    genreId.forEach(id =>
        genreIdToNameMap.forEach(genreIdToName => {
            if (id === genreIdToName.id) {
                genreNames.push(genreIdToName.name)
            }
        })
    )
    return genreNames
}

const convertAllMediaGenreIdsToName = (medias, genreIdToNameMap) => {
    return medias.map(media => {
        const genreNames = convertMediaGenreIdsToName(
            media.genre_ids,
            genreIdToNameMap
        )
        return { genres: genreNames, ...media }
    })
}
