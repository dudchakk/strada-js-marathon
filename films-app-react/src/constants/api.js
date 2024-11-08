export const URLS = {
  GENRES: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
  TOP_RATED: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=',
  POPULAR: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=',
}

export const getGenres = async (token) => {
  let response = await fetch(URLS.GENRES, {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (response.ok) {
    return response.json()
  }
  throw new Error(`Error ${response.status}: ${response.statusText}`)
}

export const getFilms = async (sortBy, token, page = 1) => {
  let url = sortBy === 'Popularity' ? URLS.POPULAR : URLS.TOP_RATED

  let response = await fetch(`${url}${page}`, {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
  })

  if (response.ok) {
    return response.json()
  }
  throw new Error(`Error ${response.status}: ${response.statusText}`)
}
