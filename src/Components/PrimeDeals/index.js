import { Component } from 'react'
import Cookies from 'js-cookie'
import React from 'react'
import ProductCard from '../ProductCards'
import './index.css'

const apiResponses={
    sucess:'SUCESS',
    failure:'FAILURE',
    loading:'LOADING'
}
  
class PrimeDeals extends Component
{
    state={
        primeDealsProducts:[],
        apiStatus:' ',

    }
    componentDidMount(){
        this.getPrimeDealsProducts()
    }
    getPrimeDealsProducts=async()=>{
    
         this.setState({
            apiStatus:apiResponses.loading,
         })
        
        const ApiUrl="https://apis.ccbp.in/prime-deals";
        const jwtToken=Cookies.get('jwt_token')
        const options={
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
              method: "GET",
        };
        const response=await fetch(ApiUrl,options)
        if(response.ok===true)
        {
            const Data=await response.json()
            console.log(Data)
            const fetchedData=Data.prime_deals.map((primePro )=>({
                id:primePro.id,
                imgUrl:primePro.image_url,
                title:primePro.title,
                brand:primePro.title,
                price:primePro.price,
                rating:primePro.rating
            }))
            this.setState({
                primeDealsProducts:fetchedData,
                apiStatus:apiResponses.sucess

            })
           
        } 

        else if(response.status === 401)
        {
            this.setState({
                apiStatus:apiResponses.failure,
            })
        }
    }    
       
 

    onSucessfullPrimeDeals=()=>{
        const {primeDealsProducts}=this.state
        return(
            <div>
                   <h1 className='prime-header'>All PrimeDeals</h1>
                <ul className='prime-products-container'>
                {
                    primeDealsProducts.map(eachItem=>
                        <ProductCard productLists={eachItem} 
                         key={eachItem.id}
                         />
                    )
                }
                </ul>
            </div>       
        )
     }
    onFailureResponse=()=>{
       return(
        <div>
             <img
                 src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
                alt="Register Prime"
                className="register-prime-image"
             />
        </div>
       )
      
    }
    onLoadingResponse=()=>{
        return(
          <div className="products-loader-container">
               <p className='loading-head'>Loading  . .. ...</p>
           </div>
        )
      }
    render(){
        const {apiStatus}=this.state
         
        switch(apiStatus) {
            case apiResponses.sucess:
                return this.onSucessfullPrimeDeals()                
            case apiResponses.failure:
                return this.onFailureResponse()
            case apiResponses.loading:
                return this.onLoadingResponse()
            default:
                return null;
        }
    }
}

export default PrimeDeals ;
