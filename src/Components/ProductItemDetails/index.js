import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import cartContext from "../../Context";
import { BsDashSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import Header from "../Header";
import SimilarProducts from "../SimilarProducts";

import './index.css'

class ProductItemDetails extends Component
{
    state={
        eachProductDetails:{},
        similarCardProducts:[],
        Quntity:1,
    }
    
    componentDidMount(){
        this.getItemDetails()
    }
    
    FormatedData=(eachCard)=>({
        id:eachCard.id,
        imgUrl:eachCard.image_url,
        title:eachCard.title,
        price:eachCard.price,
        rating:eachCard.rating,
        totalReviews:eachCard.total_reviews,
        Description:eachCard.description,
        Brand:eachCard.brand,
        Availability:eachCard.availability
    })
   
     onIncrement=()=>{
     
       this.setState(
        prvstate=>({Quntity:prvstate.Quntity+1,
                    
        })
        
       )
     }
     onDecrement=()=>{
      this.setState(
        prvstate=>({Quntity:prvstate.Quntity-1})
      )
     }
    productFullDetails=()=>
    (
       <cartContext.Consumer>
         {value=>{
          const{addCartItem}=value
          const{eachProductDetails,similarCardProducts,Quntity}=this.state
          const {imgUrl,title,price,rating,totalReviews,Description,Brand,Availability}=eachProductDetails

        

          const onClicklAddCart = ( ) =>{
            addCartItem({...eachProductDetails,Quntity})
          }

             return(
                      <div className=" bg-container">
                          <div className="eachProduct-details">
                              <img src={imgUrl}
                              alt="16-not found"
                              className="product-card"
                            /> 
                          <div>
                              <div className="descrpituve-cont">
                                  <p className="title">{title}</p>  
                                    <p className="price">Rs {price}/-</p>  
                                <div className="rating-cont">
                                    <p className="rating">{rating}</p>
                                    <img
                                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                                      alt="star"
                                      className="star-img"
                                    />
                                </div>
                                <p className="review">{totalReviews} reviews</p> 
                                <p className="description">{Description}</p>
                                <p className="brand"><span className="span-title">Brand:</span>{Brand}</p>
                                <p className="availabilty"><span className="span-title">Availability:</span>{Availability}</p>
                                <hr className="horizantal-line"></hr>
                              <div className="quntity-continer">
                                    <button type="button" className="qunatity-control"  onClick={this.onDecrement} >
                                      <BsDashSquare className="quntity-icon"/>

                                      </button>
                                    <p>{Quntity}</p>
                                    <button type="button" className="qunatity-control" onClick={this.onIncrement}>
                                    <BsPlusSquareFill className="quntity-icon"/>
                                    </button>
                                </div>  
                                <button type="button" className="addcart-btn" onClick={onClicklAddCart}>Add Cart</button> 

                          </div>
                      </div>   
                      </div>
                        <p className="similar-title">Similar Products</p>

                        <ul className="similarproducts-container">
                        {
                          
                            similarCardProducts.map(each=>(
                              <SimilarProducts similarCardProducts={each} />
                            ))
                        } 
                        </ul>           
                      </div>     
                      )}}
     </cartContext.Consumer>  
      ) 
      
  
    onProductFailure=()=>{
       return(
        <div className="error-container">
             <img
             alt="failure view"
             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
             className="error-view-image"
             />
             <h1 className="product-not-found-heading">Product Not Found</h1>
             <Link to='/products'>
               <button type="button" className="shopping-btn">Continue shopping</button>
             </Link>
       </div>
       )
    }
    onProductLoadin=()=>{
        return <h2 className="loading-bar">Loading.....</h2>
    }

    getItemDetails=async()=>{
        const {match}=this.props
        const {params}=match
        const {id}=params
        console.log(id)

        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://apis.ccbp.in/products/${id}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const responses=await fetch(apiUrl,options)
        if (responses.ok === true)
        {
            const data=await responses.json()
            console.log(data)
            const SuitableCardData=this.FormatedData(data)
            const SimilarProducts=data.similar_products.map(similarData=>
            this.FormatedData(similarData) )
            localStorage.setItem('cartItems',data)

            this.setState({
                eachProductDetails:SuitableCardData,
                similarCardProducts:SimilarProducts,
            })
        }
       
       
    }

    render(){
       return (
        <div>
            <Header />
            {this.productFullDetails()}
        </div>
       )
    }
}
export default ProductItemDetails