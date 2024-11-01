export const initialValues = {
  sortBy: 'Popularity',
  yearRange: [1990, 2010], 
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
        yearRange: action.yearRange
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