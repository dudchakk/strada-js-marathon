import { useContext, useEffect, useState } from 'react'

import CheckboxList from '../ui/CheckboxList'

import { FiltersContext, DispatchContext } from '../constants/filtersContext'
import { getGenres } from '../constants/api'
import { userContext } from '../constants/userContext'

const CheckboxListGenres = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)
  const { token } = useContext(userContext)
  const [genres, setGenres] = useState()

  const handleChecked = (id) => {
    dispatch({
      type: 'check_genre',
      id: id,
    })
  }

  useEffect(() => {
    const callGenres = async () => {
      const response = await getGenres(token)
      setGenres(response.genres)
    }
    callGenres()
  }, [token])

  return (
    <>
      {genres && (
        <CheckboxList
          title='Genres'
          listItems={genres}
          checkedItems={filters.checkedGenres}
          handleChecked={handleChecked}
        ></CheckboxList>
      )}
    </>
  )
}

export default CheckboxListGenres
