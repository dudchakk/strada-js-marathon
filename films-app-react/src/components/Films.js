import { Box } from '@mui/material'

import FilmCard from './FilmCard'

import { films } from '../constants/constants'

const Films = () => {
  const filmItems = films.map((film) => (
    <FilmCard name={film.name} rating={film.rating} img={film.img} />
  ))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50px' }}>
      {filmItems}
    </Box>
  )
}

export default Films
