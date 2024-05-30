import './index.css'

const SimilarProducts =(props)=>{
    const {similarCardProducts}=props
    const {imgUrl,title,price,Brand,rating}=similarCardProducts
    return(
        <div> 

           <li className='similarcard-cont'>            
                  <img src={imgUrl} alt='imgurl' className='img-card' />
                  <p className='title-card'>{title}</p>
                   <p className='brand-card'>{Brand}</p>
            <div className='price-rating-card'>
                 <p className='price-card'>Rs {price}</p>
                 <div className='rating-star-card'>
                     <p className='rating-card'>{rating}</p>
                     <img
                          src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                         alt="star"
                         className="star-img-card"
                     />
                </div>
                </div>
           </li>

        </div>
    )
}
export default SimilarProducts