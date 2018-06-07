const getModuleState = state => state.cart

export function getCartProducts(state){
  return getModuleState(state).cartProducts
}

export const getCartTotal = state => getModuleState(state).totalPrice
