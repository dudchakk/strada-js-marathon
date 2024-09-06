const SERVER_URL = 'https://api.genderize.io'

export const getGender = async (name) => {
  let response = await fetch(`${SERVER_URL}/?name=${name}`)
  if (response.ok) {
    return response.json()
  }
  throw new Error(`Error ${response.status}: ${response.statusText}`)
}
