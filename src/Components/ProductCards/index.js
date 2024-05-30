import { Link } from 'react-router-dom'
import './index.css'
const ProductCard=(props)=>{
    const{productLists}=props
    const{id,imgUrl,title,brand,price,rating}=productLists
    return(
        <>
          <Link to={`/products/${id}`} className='link-container' >
            <div className='productCard-Container' >
                <img src={imgUrl} alt='img-card'
                     className='productCard-img'
                   />
                 <p className='card-title'>{title}</p> 
                 <p className='card-brand'>{brand}</p>   
                 <div className='price-rating'>
                   <p className='card-price'>Rs {price}</p>
                   <div className='price-star'>
                      <p className='rating'>{rating}</p>
                      <img
                           src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                           alt="star"
                           className="star-img"
                        />
                   </div>
                 </div>
            </div>
          </Link>  
        </>
    )
}
export default ProductCard