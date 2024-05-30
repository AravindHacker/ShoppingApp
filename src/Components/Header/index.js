
import {Link,withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import cartContext  from '../../Context'
import './index.css'

const Header=(props)=>{
    const {history}=props
    const onLogoutbtn=()=>{
       Cookies.remove('jwt_token')
       history.replace('/login')
    }
    const renderCartItemsCount = () => (
        <cartContext.Consumer>
          {value => {
            const {cartList} = value
            const cartItemsCount = cartList.length
    
            return (
              <>
                {cartItemsCount > 0 ? (
                  <span className="cart-count-badge">{cartList.length}</span>
                ) : null}
              </>
            )
          }}
        </cartContext.Consumer>
      )
    
    
    return(
        <div>
        
            <ul className="header-container">
                <Link to='/' className="home-link-cont">
                   <li>Home</li> 
                </Link>
                <Link to='/products'className="product-link-cont">
                    <li>Products</li>
                </Link>
                <Link to='/cart' className="carts-link-cont">
                   <div className='cart-contain'>
                    <li> Carts</li>
                    {renderCartItemsCount()}
                  </div>
                </Link>
                <Link to='/login'>
                    <li>
                        <button type="button" className="logout-btn" onClick={onLogoutbtn}>Logout</button>
                    </li>
                </Link>

            </ul>
            <ul className="nav-menu-list-mobile">
              <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-img"
                  />
                </Link>
              </li>

              <li className="nav-menu-item-mobile">
                <Link to="/products" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-img"
                  />
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/cart" className="nav-link">
                  <div className='cart-contain2'>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                      alt="nav cart"
                      className="nav-bar-img"
                    />
                    <p className='cart-number'>{renderCartItemsCount()} </p>
                  </div>
                </Link>
              </li>
              <li>
                 <Link to="/login" className='nav-link'>
                 <button type="button" className="logout-btn" onClick={onLogoutbtn}>
                   <img src='https://cdn-icons-png.flaticon.com/128/1286/1286853.png'
                        alt='nav logout' className='nav-bar-logout'  />
                  </button>      
                 </Link>
              </li>
               
            </ul>
        </div>
    )
}
export default withRouter(Header)