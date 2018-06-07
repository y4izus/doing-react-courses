import * as ActionTypes from './actionTypes'
export * from './actions'
export * from './selectors'

const initialState = {
  cartProducts: [],
  totalPrice: 0
}




const reducer = (state={cartProducts:[], totalPrice:0}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return addProductToCart( state, action.product )
    case ActionTypes.ADD_ONE_PRODUCT_TO_CART:
      return addOneProductToCart( state, action.product)
    case ActionTypes.QUIT_ONE_PRODUCT_FROM_CART:
      return quitOneProductFromCart( state, action.product)
    case ActionTypes.DELETE_PRODUCT_FROM_CART:
      return deleteProductFromCart(state, action.product)

    default:
      return state
  }
}

const addProductToCart = ( state, product ) => {
  const productOnCart = state.cartProducts.filter(p => p.id === product.id) 
  if(productOnCart.length > 0) {
    const indexProduct = state.cartProducts.indexOf(productOnCart[0])
    return addOneProductToCart(state, {index: indexProduct, info: productOnCart[0]})
  } 
  else {
    return {
      cartProducts: [...state.cartProducts, 
        {
          id: product.id, 
          name: product.name, 
          description: product.description, 
          price: product.price,
          subtotal: product.price,
          qty: 1 
        }],
      totalPrice: state.totalPrice + product.price
    }
  }
}

const addOneProductToCart = ( state, product ) => {
  const updatedProduct = {
    id: product.info.id, 
    name: product.info.name, 
    description: product.info.description, 
    price: product.info.price,
    subtotal: product.info.subtotal + product.info.price,
    qty: product.info.qty + 1 
  }
  const cartProducts = [
    ...state.cartProducts.slice(0, product.index),
    updatedProduct,
    ...state.cartProducts.slice(product.index + 1)
  ]
  return {
    cartProducts, 
    totalPrice: state.totalPrice + product.info.price 
  }
}

const quitOneProductFromCart = ( state, product ) => {
  if (product.info.qty === 1) 
    return deleteProductFromCart ( state, { index: product.index, subtotal: product.info.subtotal }  )
  
  const updatedProduct = {
    id: product.info.id, 
    name: product.info.name, 
    description: product.info.description, 
    price: product.info.price,
    subtotal: product.info.subtotal - product.info.price,
    qty: product.info.qty - 1 
  }
  const cartProducts = [
    ...state.cartProducts.slice(0, product.index),
    updatedProduct,
    ...state.cartProducts.slice(product.index + 1)
  ]
  return {
    cartProducts, 
    totalPrice: state.totalPrice - product.info.price 
  }
}

const deleteProductFromCart = ( state, product ) => {
  return {
    cartProducts: [...state.cartProducts.slice(0, product.index),
                   ...state.cartProducts.slice(product.index + 1)], 
    totalPrice: state.totalPrice - product.subtotal 
  }
}


export default reducer