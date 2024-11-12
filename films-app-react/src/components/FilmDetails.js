import Header from './Header'

import { Box, Typography, IconButton } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const FilmDetails = () => {
  const actors = []
  const details = [{ name: '', value: '' }]

  const actorItems = actors.map(item => <Typography key={item} variant='h6'>{item}</Typography>)
  const detailItems = details.map(item => <Box key={item.name}>
    <Typography>{item.name}</Typography>
    <Typography>{item.value}</Typography>
  </Box>)
  
  return (
    <>
      <Header title='Films - details' />
      <img />
      <Box>
        <Box>
          <Typography variant='h1'>Title</Typography>
          <IconButton>
            <StarOutlineIcon />
          </IconButton>
        </Box>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        {actorItems}
        <Box>
          <Typography variant='h4'>Details</Typography>
          {detailItems}
        </Box>
      </Box>
    </>
  )
}

export default FilmDetails