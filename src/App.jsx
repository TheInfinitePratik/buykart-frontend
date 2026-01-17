import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Loginsignup from './Pages/Loginsignup'
import Footer from './Component/Footer/Footer'
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'



function App() {

  return (
    <div className='app'>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner ={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner ={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner ={kid_banner} category="kid"/>}/>

        <Route path="/product/:productId" element={<Product/>}/>
          
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
