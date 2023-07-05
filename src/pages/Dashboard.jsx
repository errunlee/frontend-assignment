import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homepage from './Homepage'
import About from './About'
import Products from './Products'
import Cart from './Cart'
import Detailpage from './Detailpage'
import {Link, Routes,Route} from 'react-router-dom'
export default function Dashboard(){
  return (
    <div className='d-flex flex-column vh-100'>
    <Navbar/>
      <Routes>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/' element={<Homepage/>}></Route>      
    <Route exact path='/products' element={<Products/>}></Route>      
    <Route exact path='/cart' element={<Cart/>}></Route>      
    <Route exact path='/product/:id' element={<Detailpage/>}></Route>      
      </Routes>
    <Footer/>
      </div>
  )
}