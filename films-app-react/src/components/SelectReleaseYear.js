import { useContext } from 'react'

import SelectBlock from '../ui/Select'

import { releaseYearItems } from '../constants/constants'
import { FiltersContext, DispatchContext } from '../constants/filtersContext'

const SelectReleaseYear = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)

  const handleReleaseYearChange = (e) => {
    dispatch({
      type: 'set_year',
      year: e.target.value,
    })
  }

  return (
    <SelectBlock
      title='Release year'
      value={filters.year}
      listItems={releaseYearItems}
      handleChange={handleReleaseYearChange}
    ></SelectBlock>
  )
}

export default SelectReleaseYear
