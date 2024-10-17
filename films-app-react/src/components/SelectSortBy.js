import { useContext } from 'react'

import SelectBlock from '../ui/Select'

import { sortByItems } from '../constants/constants'
import { FiltersContext, DispatchContext } from '../constants/filtersContext'

const SelectSortBy = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)

  const handleSortByChange = (e) => {
    dispatch({
      type: 'set_sort',
      sortBy: e.target.value,
    })
  }

  return (
    <SelectBlock
      title='Sort by'
      value={filters.sortBy}
      listItems={sortByItems}
      handleChange={handleSortByChange}
    ></SelectBlock>
  )
}

export default SelectSortBy
