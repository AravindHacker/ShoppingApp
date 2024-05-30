import React from "react"
const cartContext=React.createContext({
    cartList:[ ],
    addCartItem:()=>{},
    removeCartItem:()=>{},
    removeAllCartItem:()=>{},
    onIncremeant:()=>{},
    onDecremeant:()=>{},
})
export default cartContext