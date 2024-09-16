import { useState } from 'react'

import SelectBlock from '../ui/SelectBlock'
import CheckboxListBlock from '../ui/CheckboxListBlock'
import PaginationBlock from './PaginationBlock'

import { sortByItems, releaseYearItems, genresItems } from '../constants'

const Filters = () => {
  const [sortByValue, setSortByValue] = useState('Popularity')
  const [releaseYearValue, setReleaseYearValue] = useState(2000)

  const handleSortByChange = (e) => {
    setSortByValue(e.target.value)
  }

  const handleReleaseYearChange = (e) => {
    setReleaseYearValue(e.target.value)
  }

  return (
    <div className='filters'>
      <div>
        <span>Filters</span>
        <span>x</span>
      </div>
      <SelectBlock
        title='Sort by'
        value={sortByValue}
        listItems={sortByItems}
        handleChange={handleSortByChange}
      />
      <SelectBlock
        title='Release year'
        value={releaseYearValue}
        listItems={releaseYearItems}
        handleChange={handleReleaseYearChange}
      />
      <CheckboxListBlock listItems={genresItems} />
      <PaginationBlock />
    </div>
  )
}

export default Filters
