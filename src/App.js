import { Component } from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import cartContext from './Context'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Product from './Components/Products'
import LoginForm from './Components/LoginForm'
import ProductItemDetails from './Components/ProductItemDetails'
import ProtectedRoute from './Components/ProtectedRouter'
import NotFound from './Components/NotFound'
import './index.css'

class App extends Component{
   state={
    cartList:[],
   }
    onAddCartItem = product => {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }  
    onremoveCartItem=(id)=>{
        console.log(id)
        const {cartList}=this.state
        const updatedList=cartList.filter(each=>each.id!==id)
        this.setState({cartList:updatedList})
    }
    removeAllCartItem=()=>{
       this.setState({cartList:''})
    }

    onDecremeant=()=>{

    }
    onIncremeant=(id)=>{
        this.setState(prevState =>({
          cartList:prevState.cartList.map(eachItem=>{
            if(id===eachItem.id)
              {
                const updateQn=eachItem.Quntity + 1
                return {...eachItem,Quntity:updateQn}
              }
              return eachItem
          })
        }))
    }
   render(){
        const {cartList}=this.state
    return (
       <div>
         <Router>
 
            <cartContext.Provider value={{
                  cartList,
                  addCartItem:this.onAddCartItem,
                  removeCartItem:this.onremoveCartItem,
                  removeAllCartItem:this.removeAllCartItem,
                  incremeantQn:this.onIncremeant,
                  decremeantQn:this.onDecremeant,
             }} >
              <Switch>
                    <Route exact path='/login' component={LoginForm}  />

                    <ProtectedRoute exact path='/' component={Home}/>
                    <ProtectedRoute exact path='/products' component={Product} />

                    <ProtectedRoute exact path='/products/:id' component={ProductItemDetails} />
                    <ProtectedRoute exact path='/cart' component={Cart} />

                    <ProtectedRoute exact path='/not-fond' component={NotFound} />
                    <Route component={NotFound} />
              </Switch>
           </cartContext.Provider>
         </Router>
  
       
       </div> 

    )
  }
}
export default App