const getWeatherData = (state) => {
    return state.weather.getWeather.data
}

const getError = (state) => {
    return state.weather.getWeather.error
}

const getLoading = (state) => {
    return state.weather.getWeather.loading
}

export {
    getWeatherData,
    getError,
    getLoading
};