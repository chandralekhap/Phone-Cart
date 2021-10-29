
const reducer = (carts, action)=>{

if(action.type === 'CLEAR')
return ({...carts, cart : []})
else if (action.type === 'REMOVE')
{
 //   console.log('remove in reudcer:' ,{...carts, cart: carts.cart.filter((item)=>(item.id!== action.payload))} )
    return ({...carts, cart: carts.cart.filter((item)=>(item.id!== action.payload))})
}
else if(action.type === 'INCREASE')
{
    let tempCart = carts.cart.map((item)=>{

        if(item.id === action.payload)
        {
           // console.log('map n increase', {...item, amount: item.amount + 1} )
                return {...item, amount: item.amount + 1}
        }
        return item;
    })

    const data ={...carts, cart: tempCart}
  console.log('increase function in reducer', {...carts, cart: tempCart})
    return {...carts, cart: tempCart}
}
else if(action.type === 'DECREASE')
{
    let tempCart = carts.cart.map((item)=>{

        if(item.id === action.payload)
        {
           // console.log('map n increase', {...item, amount: item.amount + 1} )
                return {...item, amount: item.amount - 1}
        }
        return item;
    }).filter((item)=>(item.amount>0))

    const data ={...carts, cart: tempCart}
  
    return {...carts, cart: tempCart}
}
else if(action.type === 'GET_TOTAL')
{
    
 const {amounts, total} = carts.cart.reduce(({amounts, total}, item)=>
 (
  {
    amounts : amounts + item.amount  ,
    total : total + item.amount * item.price
   
  }
)
,{amounts : 0, total: 0})

return {...carts, amount: amounts, total}

}
else
return carts;

}

export default reducer;