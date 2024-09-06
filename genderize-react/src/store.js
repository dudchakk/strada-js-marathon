export const setStorageName = (name) => {
  localStorage.setItem('name', name)
}

export const getStorageName = () => {
  return localStorage.getItem('name')
}

export const setStorageGender = (gender) => {
  localStorage.setItem('gender', gender)
}

export const getStorageGender = () => {
  return localStorage.getItem('gender')
}