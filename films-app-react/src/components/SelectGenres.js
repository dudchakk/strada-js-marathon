import { useContext, useEffect, useState } from 'react'

import { Autocomplete, TextField, Checkbox } from '@mui/material'

import CheckboxList from '../ui/CheckboxList'

import { FiltersContext, DispatchContext } from '../constants/filtersContext'
import { getGenres } from '../constants/api'
import { userContext } from '../constants/userContext'

const CheckboxListGenres = () => {
  const filters = useContext(FiltersContext)
  const dispatch = useContext(DispatchContext)
  const { token } = useContext(userContext)
  const [genres, setGenres] = useState()

  const handleChange = (event, value) => {
    dispatch({
      type: 'change_genres',
      checkedGenres: value
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
        <Autocomplete
          multiple
          options={genres}
          value={filters.checkedGenres}
          onChange={handleChange}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  checked={filters.checkedGenres.includes(option)}
                />
                {option.name}
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField {...params} label="Genres" />
          )}
        />
      )}
    </>
  )
}

export default CheckboxListGenres
