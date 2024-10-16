const GENRES = {
  URL: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
}

export const getGenres = async (token) => {
  let response = await fetch(GENRES.URL, {
    headers: { Authorization: `Bearer ${token}`}
  })
  
  if (response.ok) {
    return response.json()
  }
  throw new Error(`Error ${response.status}: ${response.statusText}`)
}