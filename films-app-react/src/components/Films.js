import { useState, useEffect, useContext } from 'react'

import { Box } from '@mui/material'

import FilmCard from './FilmCard'
import { getFilms } from '../constants/api'
import { FiltersContext } from '../constants/filtersContext'
import { UserContext } from '../constants/userContext'

const Films = () => {
  const { tokenFilms } = useContext(UserContext)
  const filters = useContext(FiltersContext)
  const [films, setFilms] = useState([])

  useEffect(() => {
    const callFilms = async () => {
      const response = await getFilms(filters.sortBy, tokenFilms, filters.page)
      setFilms(response.results)
    }
    callFilms()
  }, [filters.sortBy, filters.page, tokenFilms])

  const filmItems = films.map((film) => (
    <FilmCard
      key={film.id}
      title={film.title}
      rating={film.vote_average}
      img={film.poster_path}
    />
  ))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50px' }}>
      {filmItems}
    </Box>
  )
}

export default Films
