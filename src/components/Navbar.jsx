import {useState} from 'react'
import {Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import {AppContext} from '../context/Appcontext'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai'
import {useContext} from 'react'
export default function Navbar(){
  const {amount}=useContext(AppContext)
  const [show,setShow]=useState(false)
  return(
  <div>
    <nav className='d-flex position-relative p-3' >
    <div className='d-flex align-items-lg-center align-items-start justify-content-around flex-lg-row flex-column w-100'>
      <Link to='/' className='text-decoration-none'><p className='title h2 m-0 fw-bolder'><span className='text-info'>ONLINE</span> | <span className='text-secondary'>STORE</span></p></Link>
      <ul className={`nav-links list-unstyled m-0  d-lg-flex ${show?'d-block':'d-none'}`}>
      <Link to='/' onClick={()=>{setShow(!show)}}><li id='home' className='mx-lg-2 lead'>Home</li></Link>
     <Link  to='/about' onClick={()=>{setShow(!show)}}> <li id='about' className='mx-lg-2 lead'>About Us</li></Link>
      <Link to='/products' onClick={()=>{setShow(!show)}}> <li id='products' className='mx-lg-2 lead'>Our Products</li></Link>
      </ul>
      <div className='d-lg-flex '>
    <Link to='/cart' onClick={()=>{setShow(!show)}} className='text-decoration-none text-dark d-flex my-3 my-lg-0 mx-lg-4'>  <span className={`  d-lg-block ${show?'d-block':'d-none'}`}><div className='position-relative cart-box'>Cart<FaShoppingCart className='mx-1' style={{height:'30px',width:'30px'}} /><p className='position-absolute m-0 text-center'>{amount}</p></div></span></Link>
    </div>
      
    </div>
      <span onClick={()=>{setShow(!show)}} className='toggle-btn d-block d-lg-none btn btn-info fw-bolder rounded-pill text-white position-absolute'>{show?<FaTimes/>:<GiHamburgerMenu/>}</span>
    </nav>
  </div>
    
  )
}