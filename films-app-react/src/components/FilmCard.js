import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Paper,
} from '@mui/material'

import StarOutlineIcon from '@mui/icons-material/StarOutline'

const FilmCard = ({ name, rating, img }) => {
  return (
    <Paper sx={{ width: '296px', height: '324px', margin: '10px' }}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          image='public\download (3).jpg'
          height={240}
        />
        <CardHeader
          title={name}
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
