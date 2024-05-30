import cartContext from "../../Context";
import { BsDashSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";


import './index.css'

const CartItem=(props)=>(
    <cartContext.Consumer>
        { value=>{

                const{removeCartItem}=value

                const{cartDetails}=props
                const {imgUrl,id,title,Brand,price,Quntity}=cartDetails
                const onDeleteBtn=()=>{
                    console.log(id)
                     removeCartItem(id)
                }
               
                return(
                    <div className="cart-sep">
                        <div className='each-cart'>
                            <img src={imgUrl} className='img-cart' alt='img-cart' />
                            <div className='cart-desc'>
                                <p >{title}</p>
                                <p>{Brand}</p>
                            </div>
                            <div className="Quntity-cont">
                                <BsDashSquare className="quntity-icon1"/> 
                                <p className="quntity">{Quntity}</p>
                               <BsPlusSquareFill className="quntity-icon"/>
                            </div>
                                <p className="price">Rs. <span className="amount">{price} /-</span></p>
                            <div className="del-cont">
                               <button type="button" className="delete-button" onClick={onDeleteBtn}><img src="https://th.bing.com/th/id/R.28c8fb93b3748e16c0878c0e71efb2f3?rik=2FMOW%2fbqVBmtag&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_304350.png&ehk=IkC6YMie%2f2uam4UNx5qnfUcw9L06EwYBCSCPjctwnf4%3d&risl=&pid=ImgRaw&r=0"
                                alt="delete" className="delete-icon" /></button>
                            </div>

                        </div>
                        
                    </div>
                    )
    }}
  </cartContext.Consumer>  
)
export default CartItem