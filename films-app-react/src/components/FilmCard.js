import {
  Card,
  CardMedia,
  CardHeader,
  IconButton,
  Paper,
} from '@mui/material'

import StarOutlineIcon from '@mui/icons-material/StarOutline'

const FilmCard = ({ title, rating, img }) => {
  return (
    <Paper sx={{ width: '296px', height: '324px', margin: '10px' }}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          src={`https://image.tmdb.org/t/p/w300${img}`}
          height={240}
        />
        <CardHeader
          title={title}
          subheader={`Rating ${rating}`}
          action={
            <IconButton>
              <StarOutlineIcon />
            </IconButton>
          }
          sx={{padding: '11px'}}
        >
        </CardHeader>
      </Card>
    </Paper>
  )
}

export default FilmCard
