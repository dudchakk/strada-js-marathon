export const initialValues = {
  sortBy: 'Popularity',
  year: 2000,
  checkedGenres: []
}

export const filtersReducer = (filters, action) => {
  switch (action.type) {
    case 'set_sort':
      return {
        ...filters,
        sortBy: action.sortBy
      }
    case 'set_year':
      return {
        ...filters,
        year: action.year
      }
    case 'check_genre':
      return {
        ...filters,
        checkedGenres: filters.checkedGenres.includes(action.id)
          ? filters.checkedGenres.filter((itemId) => itemId !== action.id)
          : [...filters.checkedGenres, action.id]
      }
    case 'reset':
      return initialValues
    default:
      throw Error('Undefined type')
      return
  }
}