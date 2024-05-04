import Cookies from "js-cookie";

function minutesToExpire(min)
{
    return new Date(Date.now() + min * 60 * 1000);
}

export function storeFavoriteCities(favoriteCities)
{
    var inFifteenMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);
    Cookies.set('favorite_cities', favoriteCities, {
        expires: minutesToExpire(60)
    });
}

export function getFavoriteCities()
{
    return Cookies.get('favorite_cities');
}

export function storeCityName(cityName)
{
    Cookies.set('city_name', cityName, {
        expires: minutesToExpire(60)
    });
}

export function getCityName()
{
    return Cookies.get('city_name');
}

export function storeChosenTab(tab)
{
    Cookies.set('chosen_tab', tab, {
        expires: minutesToExpire(60)
    });
}

export function getChosenTab()
{
    return Cookies.get('chosen_tab');
}