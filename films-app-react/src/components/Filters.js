import { useState, useEffect, useReducer } from 'react'

import SelectBlock from '../ui/SelectBlock'
import CheckboxListBlock from '../ui/CheckboxListBlock'
import Button from '../ui/Button'
import PaginationBlock from './PaginationBlock'

import { sortByItems, releaseYearItems } from '../constants/constants'
import { getGenres } from '../constants/api'
import { initialValues, filtersReducer } from '../constants/reducer'

const Filters = () => {
  const [filters, dispatch] = useReducer(filtersReducer, initialValues)
  const [genres, setGenres] = useState()

  const handleSortByChange = (e) => {
    dispatch({
      type: 'set_sort',
      sortBy: e.target.value
    })
  }

  const handleReleaseYearChange = (e) => {
    dispatch({
      type: 'set_year',
      year: e.target.value
    })
  }

  useEffect(() => {
    const callGenres = async () => {
      const response = await getGenres()
      setGenres(response.genres)
    }
    callGenres()
  }, [])

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='filters'>
      <div>
        <span>Filters</span>
        <span>x</span>
      </div>
      <SelectBlock
        title='Sort by'
        value={filters.sortBy}
        listItems={sortByItems}
        handleChange={handleSortByChange}
      />
      <SelectBlock
        title='Release year'
        value={filters.year}
        listItems={releaseYearItems}
        handleChange={handleReleaseYearChange}
      />
      {genres && (
        <CheckboxListBlock
          listItems={genres}
          checkedGenres={filters.checkedGenres}
          dispatch={dispatch}
        />
      )}
      <Button text='Reset filters' handleClick={handleReset}></Button>
      <PaginationBlock />
    </div>
  )
}

export default Filters
