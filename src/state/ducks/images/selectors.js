const getImage = (state) => {
    return state.images.getImages.data
}

const getError = (state) => {
    return state.images.getImages.error
}

const getLoading = (state) => {
    return state.images.getImages.loading
}

export {
    getImage,
    getError,
    getLoading
};