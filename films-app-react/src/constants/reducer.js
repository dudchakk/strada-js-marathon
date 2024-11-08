export const initialValues = {
  sortBy: 'Popularity',
  yearRange: [1990, 2010], 
  checkedGenres: [],
  page: 1
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
    case 'set_page':
      return {
        ...filters,
        page: action.page
      }
    case 'change_genres':
      console.log(action.checkedGenres)
      return {
        ...filters,
        checkedGenres: action.checkedGenres
      }
    case 'reset':
      return initialValues
    default:
      throw Error('Undefined type')
  }
}