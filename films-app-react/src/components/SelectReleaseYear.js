import { useContext, useState } from 'react'

import { Box, Slider } from '@mui/material'

import { FiltersContext, DispatchContext } from '../constants/filtersContext'

const SelectReleaseYear = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)

  const handleReleaseYearChange = (event, value) => {
    dispatch({
      type: 'set_year',
      yearRange: value,
    })
  }

  return (
    <Box>
      <Box sx={{ marginBottom: '45px' }}>Release year:</Box>
      <Slider
        value={filters.yearRange}
        onChange={handleReleaseYearChange}
        valueLabelDisplay='auto'
        min={1960}
        max={2025}
      />
    </Box>
  )
}

export default SelectReleaseYear
