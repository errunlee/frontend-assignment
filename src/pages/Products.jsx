import {useContext} from 'react'
import SingleProduct from '../components/SingleProduct'
import Searchside from '../components/Searchside'
import Loader from '../components/Loader'
import {AppContext} from '../context/Appcontext'
import {useEffect} from 'react'
import {useLocation,Link} from 'react-router-dom'

export default function Products(){
  const location=useLocation();
  const {getAllProducts,allProducts,getCategories,categories,loading}=useContext(AppContext)
  useEffect(()=>{
    getAllProducts()
    getCategories();
  },[]);
  //for actvei class
     useEffect(()=>{
    const linkItem=document.querySelector('#products')
    linkItem.classList.add('active')    
    return(()=>{
      linkItem.classList.remove('active')
    })
  },[])
  if(loading){
    return <Loader/>
  }
  if(allProducts.length<=0){
    return <div><h2 className='text-center text-danger'>No items found.</h2></div>
  }
  return (
    <div>
      <h2 className='text-uppercase pathname py-3'>{location.pathname}</h2>
    {loading?<Loader/>:<div className='container my-3'>
       <div className='row justify-content-between'>
       <div className='col-md-2'>
         <Searchside categories={categories} getAllProducts={getAllProducts}/>
       </div>
          <div className='col-md-10'>
            
           <div className='row'>
             {
        allProducts.map((singleProduct)=>{
          return <div key={singleProduct.id} className='col-md-4 col-lg-3 col-6'><SingleProduct singleProduct={singleProduct}/></div>
        })
      }
           </div> 
           
      </div>
       </div> 
     
    </div>}
    </div>
    
  )
  
}