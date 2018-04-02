const getLocation = (state) => {
    return state.location.getLocation.data
}

const getError = (state) => {
    return state.location.getLocation.error
}

const getLoading = (state) => {
    return state.location.getLocation.loading
}

export {
    getLocation,
    getError,
    getLoading
};