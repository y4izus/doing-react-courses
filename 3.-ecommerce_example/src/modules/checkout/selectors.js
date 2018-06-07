const getModule = state => state.checkout

export const getName = state => getModule(state).name
export const getLastName = state => getModule(state).lastName
export const getEmail = state => getModule(state).email
export const getAddress = state => getModule(state).address