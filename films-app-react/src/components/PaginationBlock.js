import { useContext } from 'react'

import Pagination from '@mui/material/Pagination'

import { FiltersContext, DispatchContext } from '../constants/filtersContext'

const PaginationBlock = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)

  const handleChange = (event, page) => {
    dispatch({type: 'set_page', page: page})
  }

  return (
    <Pagination count={500} page={filters.page} onChange={handleChange} />
  )
}

export default PaginationBlock