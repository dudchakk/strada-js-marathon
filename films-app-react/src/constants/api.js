const GENRES = {
  URL: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
  TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzViODdjMzAwNTI1M2ZiYzU4ODMzMGMzMmNlNDE2OCIsIm5iZiI6MTcyNjQ5NDk5OC4wNjcyMjEsInN1YiI6IjY2ZTgzNzU3OWRmYmJkZjBlNmQwMDcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sSPChq45ckS5P41iVeDiCiRxvxYhkcwHMuD822is2EM'
}

export const getGenres = async () => {
  let response = await fetch(GENRES.URL, {
    headers: { Authorization: `Bearer ${GENRES.TOKEN}`}
  })
  
  if (response.ok) {
    return response.json()
  }
  throw new Error(`Error ${response.status}: ${response.statusText}`)
}