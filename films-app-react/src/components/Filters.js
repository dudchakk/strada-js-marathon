import { useState, useEffect } from 'react'

import SelectBlock from '../ui/SelectBlock'
import CheckboxListBlock from '../ui/CheckboxListBlock'
import Button from '../ui/Button'
import PaginationBlock from './PaginationBlock'

import { sortByItems, releaseYearItems } from '../constants'
import { getGenres } from '../api'

const Filters = () => {
  const [sortByValue, setSortByValue] = useState('Popularity')
  const [releaseYearValue, setReleaseYearValue] = useState(2000)
  const [genres, setGenres] = useState()
  const [checkedGenres, setCheckedGenres] = useState([])

  const handleSortByChange = (e) => {
    setSortByValue(e.target.value)
  }

  const handleReleaseYearChange = (e) => {
    setReleaseYearValue(e.target.value)
  }

  useEffect(() => {
    const callGenres = async () => {
      const response = await getGenres()
      setGenres(response.genres)
    }
    callGenres()
  }, [])

  const handleReset = () => {
    setSortByValue('Popularity')
    setReleaseYearValue(2000)
    setCheckedGenres([])
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
      {genres && (
        <CheckboxListBlock
          listItems={genres}
          checkedGenres={checkedGenres}
          setCheckedGenres={setCheckedGenres}
        />
      )}
      <Button text='Reset filters' handleClick={handleReset}></Button>
      <PaginationBlock />
    </div>
  )
}

export default Filters
