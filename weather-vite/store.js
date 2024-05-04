export function storeFavoriteCities(favoriteCities)
{
    localStorage.setItem('favorite_cities', favoriteCities);
}

export function getFavoriteCities()
{
    return localStorage.getItem('favorite_cities');
}

export function storeCityName(cityName)
{
    localStorage.setItem('city_name', cityName);
}

export function getCityName()
{
    return localStorage.getItem('city_name');
}

export function storeChosenTab(tab)
{
    localStorage.setItem('chosen_tab', tab);
}

export function getChosenTab()
{
    return localStorage.getItem('chosen_tab');
}