import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export default function About(){
     useEffect(()=>{
    const linkItem=document.querySelector('#about')
    linkItem.classList.add('active')    
    return(()=>{
      linkItem.classList.remove('active')
    })
  },[])
  const location=useLocation();
  return(
    <div>
      <h2 className='text-uppercase pathname py-3'>{location.pathname}</h2>
<div className='container ' style={{flex:'1'}}>
  <div className='row justify-content-between'>
  <div className='col-md-6'>
  <h1>WHO ARE WE?</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum</p>
  </div>
  <div className='col-md-4'>
  <img className='img-fluid d-none d-lg-block' src='/images/what.png'/>
    
  </div>
  </div>
</div>
    </div>
  )
}
