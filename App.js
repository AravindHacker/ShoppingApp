import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Product from './Components/Products'
import LoginForm from './Components/LoginForm'
import ProductItemDetails from './Components/ProductItemDetails'
import NotFound from './Components/NotFound'
import './index.css'
const App=()=>{

    return (
       <div> 
    
            <BrowserRouter>
              <Switch>
              <Route exact path='/' component={Home}/>
               <Route exact path='/cart' component={Cart} />  
               <Route exact path='/products' component={Product} />
               <Route exact path='/login' component={LoginForm}  />
               <Route exact path='/products/:id' component={ProductItemDetails} />
               <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
       
       </div> 

    )
  }
export default App