const getModule = state => state.catalog

export const getProducts = state => getModule(state).products

export const isFetching = state => getModule(state).isLoading

export const hasFetchError = state => getModule(state).hasError