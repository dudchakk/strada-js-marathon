import { useContext } from 'react'

import { IconButton, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import SelectSortBy from './SelectSortBy'
import SelectReleaseYear from './SelectReleaseYear'
import CheckboxListGenres from './SelectGenres'
import PaginationBlock from './PaginationBlock'

import { DispatchContext } from '../constants/filtersContext'

const Filters = () => {
  const dispatch = useContext(DispatchContext)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <Paper className='filters'>
      <div>
        <span>Filters</span>
        <IconButton onClick={handleReset}>
          <CloseIcon />
        </IconButton>
      </div>
      <SelectSortBy />
      <SelectReleaseYear />
      <CheckboxListGenres />
      <PaginationBlock />
    </Paper>
  )
}

export default Filters
