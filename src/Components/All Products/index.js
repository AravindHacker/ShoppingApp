import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import Cookies from "js-cookie";
import ProductCard from "../ProductCards";
import ProductHeader from "../ProductsHeader";
import './index.css'




const sortbyOptions=[
    {
        optionId:'PRICE_HIGH',
        displayText:'price (High-Low)',
    },
    {
        optionId:'PRICE_LOW',
        displayText:'price (Low-High)',
    },

]
class AllProducts extends Component
{
    state={
        productLists:[],
        activeOptionId:sortbyOptions[0].optionId,
        searchInput:'',
        filterByCategoryId:' ',
    }
    componentDidMount=()=>{
        this.getProductsList()
    }
   
    updateActiveOptionId=(activeOptionId)=>
    {
        this.setState({activeOptionId},this.getProductsList)
    }
    onSearchResults=(event)=>{
            this.setState({searchInput:event.target.value})
    }
    CategoryUpdatedId=(CategoryId)=>{
         console.log(CategoryId)
    }
    onClearBtn=()=>{
        this.setState({
            searchInput: " ",
        })
    }
    getProductsList=async()=>
    {
        const {activeOptionId}=this.state
        const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`;
        const jwtToken = Cookies.get("jwt_token");
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
        const response = await fetch(apiUrl, options);
        console.log(response)
        
        if (response.ok === true)
        {
            const data=await response.json()
            console.log(data)
            const updatedList=data.products.map((eachItem)=>({
                id:eachItem.id,
                imgUrl:eachItem.image_url,
                title:eachItem.title,
                brand:eachItem.title,
                price:eachItem.price,
                rating:eachItem.rating
                
            }))
            this.setState({
                productLists:updatedList
            })
        }    

    }
    render(){
        const {productLists,searchInput}=this.state
        const serachInputFilter = productLists.filter(eachSearch=>eachSearch.title.includes(searchInput))
        return(
            <>
                <div className="product-filter-container">
                    <div className="input-container">
                      <input type="search" className="search-products" onChange={this.onSearchResults} placeholder="Search..." />
                       <CiSearch className="search-icon"/>
                    <button onClick={this.onClearBtn} className="clearBtn"> <img src="https://img.icons8.com/?size=50&id=6483&format=png" className="clearINp" alt="del" />
                    </button>
                    </div>

                     <h1 className="products-header">All PRODUCTS</h1>

                     <ProductHeader sortbyOptions={sortbyOptions}
                        updateActiveOptionId={this.updateActiveOptionId}
                     />
                </div>
                
                 <div className="filters-products-section">
                
                  
                    

                     <ul className="products-container">
                    {
                        serachInputFilter.map(eachProduct=>
                          <ProductCard productLists={eachProduct} 
                             key={eachProduct.id}
                          />  
                            )
                    }
                 </ul>

                 </div>
            
                 
            </>
        )
    }
}
export default AllProducts