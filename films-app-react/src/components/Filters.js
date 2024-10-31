import { useReducer } from 'react'

import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import SelectSortBy from './SelectSortBy'
import SelectReleaseYear from './SelectReleaseYear'
import CheckboxListGenres from './CheckboxListGenres'
import PaginationBlock from './PaginationBlock'

import { initialValues, filtersReducer } from '../constants/reducer'
import { FiltersContext, DispatchContext } from '../constants/filtersContext'

const Filters = () => {
  const [filters, dispatch] = useReducer(filtersReducer, initialValues)

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <FiltersContext.Provider value={filters}>
      <DispatchContext.Provider value={dispatch}>
        <div className='filters'>
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
        </div>
      </DispatchContext.Provider>
    </FiltersContext.Provider>
  )
}

export default Filters
