import cartContext from '../../Context'
import CartData from '../CartData'
import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import './index.css'

const Cart =()=>(
   <cartContext.Consumer>
      {value=>{
         const {cartList,removeAllCartItem}=value
         const showEmptyView=cartList.length===0
          const onRemoveAll=()=>{
            removeAllCartItem()
          }
            return(
            <div>
               <Header />
               {showEmptyView ? (<EmptyCartView />):
                  (
                    <>
                       <div className='header-remove'>
                           <h1 className='Cart-heading'>My Cart</h1>
                           <button type='button' onClick={onRemoveAll} className='remove-btn'>Remove All</button>
                       </div>
                       <div className='cartData'>
                         <CartData />
                         
                     </div>
                    </>
                  )
                }
            </div>
            )
         }}
   </cartContext.Consumer>
)
 
   
export default Cart