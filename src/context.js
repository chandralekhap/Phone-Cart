import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 // const [cart, setCart] = useState(cartItems)
 const initialState = {
   loading: false,
   cart : cartItems,
   amount: 0,
   total: 0
 }
 const clearCart = () =>{

  dispatchFn({type: 'CLEAR'})
}

const increase = (id) =>{

  dispatchFn({type: 'INCREASE', payload: id})
}

const decrease = (id) =>{

  dispatchFn({type: 'DECREASE', payload: id})
}

const removeFromCart = (id) =>{
  dispatchFn({type: 'REMOVE', payload: id})
}
 


const[carts, dispatchFn]= useReducer(reducer, initialState)
console.log('new state in reducer', carts)

useEffect( ()=>{

dispatchFn({type: 'GET_TOTAL'})

}, [carts.cart])

//  console.log('amount and total in useeffect', amounts, total)
  return (
    <AppContext.Provider
      value={{
        carts,
        clearCart,
        removeFromCart,
        increase,
        decrease,
        
      }}
    >
      {children}
    </AppContext.Provider>
  )
}


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
