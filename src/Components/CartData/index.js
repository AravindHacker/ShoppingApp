import cartContext from '../../Context'
import CartItem from '../cartItem'
import './index.css'

/*
const cartDetails=[
    {
      id:1,
      ImageUrl:"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
      title: "Embroidered Net Gown",
      brandName:"Manyavar",
      Quntity:2,
      price:3800,
    },
    {
      id:2,
      ImageUrl:"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
      title: "Embroidered Net Gown",
      brandName:"Manyavar",
      Quntity:2,
      price:3800,
    },
    {
      id:3,
      ImageUrl:"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
      title: "Embroidered Net Gown",
      brandName:"Manyavar",
      Quntity:2,
      price:3800,
    },
    {
      id:4,
      ImageUrl:"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
      title: "Embroidered Net Gown",
      brandName:"Manyavar",
      Quntity:2,
      price:3800,
    },
  ]  */
  
const CartData=()=>(
    <cartContext.Consumer>
        {value=>{
          const{cartList}=value
          let total = 0
          cartList.forEach(eachCartItem => {
            total += eachCartItem.price 
          })
          return(
              
              <ul className='cart-container'>
                {
                  cartList.map(eachCart=>(
                    <CartItem cartDetails={eachCart} key={eachCart.id} />
                  ))
                }
                
                <div className='cart-summary'>
                    <p >Total Order:<span className='total-data'>{cartList.length}</span></p>
                    <p>Total Bill:<span className='total-data'> Rs. {total}</span></p>
                </div>
              </ul>
              
        )
        }}     
    </cartContext.Consumer>
   )
    

export default CartData