import { useReducer } from 'react'

import SelectSortBy from './SelectSortBy'
import SelectReleaseYear from './SelectReleaseYear'
import CheckboxListGenres from './CheckboxListGenres'
import ButtonComponent from '../ui/Button'
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
            <span>x</span>
          </div>
          <SelectSortBy />
          <SelectReleaseYear />
          <CheckboxListGenres />
          <ButtonComponent
            text='Reset filters'
            handleClick={handleReset}
          ></ButtonComponent>
          <PaginationBlock />
        </div>
      </DispatchContext.Provider>
    </FiltersContext.Provider>
  )
}

export default Filters
