import Whyus from '../components/Whyus'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Homepage(){
      useEffect(()=>{
    const linkItem=document.querySelector('#home')
    linkItem.classList.add('active')    
    return(()=>{
      linkItem.classList.remove('active')
    })
  },[])
  return(

    <div className='container my-5' >
      <div className='row align-items-center text-center text-lg-start'>
      <div className='col-md-6'>
       <p className='h1 text-uppercase'>The best for the best price</p>
      <p className=''>Discover the Best for Best Prices! Explore our vast product range, enjoy unbeatable prices, and shop with confidence. We prioritize quality and bring you the ultimate online shopping experience. Visit us now!</p>
      </div>
      <div className='col-md-6'>
        <img className='img-fluid' src='https://picsum.photos/id/60/500/300'></img>
      </div>
      </div>
     <Link to='/products' className='btn btn-info my-2'>SHOP NOW</Link>
      <div>
      <Whyus/>
      </div>
   
    </div>
  )
}
