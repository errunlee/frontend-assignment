import {useContext,useState} from 'react'
import SingleProduct from '../components/SingleProduct'
import Searchside from '../components/Searchside'
import Loader from '../components/Loader'
import {AppContext} from '../context/Appcontext'
import {useEffect} from 'react'
import {useLocation,Link} from 'react-router-dom'
import { GiReturnArrow } from 'react-icons/gi'

export default function Products(){
  const [selectedSort,setSelectedSort]=useState('lowest')
  const location=useLocation();
  const {getAllProducts,allProducts,getCategories,categories,loading,setAllProducts}=useContext(AppContext)
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
 
  // if(allProducts.length<=0){
  //   return <div><h2 className='text-center text-danger'>No items found.</h2></div>
  // }

  const handlePriceRangeChange=(e)=>{
    let newProds;
    setSelectedSort(e.target.value)
    if(e.target.value==='lowest'){
       newProds=allProducts.sort((a,b)=>{return a.price-b.price})
    }
    else{
      newProds=allProducts.sort((a,b)=>{return b.price-a.price})

    }
    setAllProducts(newProds)
  }

  return (
    <div>
      <h2 className='text-uppercase pathname py-3'>{location.pathname}</h2>
    <div className='container my-3'>
       <div className='row justify-content-between'>
       <div className='col-md-2'>
         <Searchside categories={categories} getAllProducts={getAllProducts}/>
       </div>
          <div className='col-md-10'>
       {   loading?<Loader/>: <div className='row'>

      <div className="d-flex justify-content-between mx-2">
      <p className='lead fw-bold'>{allProducts.length} items found.</p>
      <select value={selectedSort} onChange={handlePriceRangeChange}>
        <option value={'lowest'}>Price (lowest)</option>
        <option value={'highest'}>Price (highest)</option>
      </select>
      </div>
             {
        allProducts.map((singleProduct)=>{
          return <div key={singleProduct.id} className='col-md-4 col-lg-3 col-6'><SingleProduct singleProduct={singleProduct}/></div>
        })
      }
           </div> }
           
      </div>
       </div> 
     
    </div>
    </div>
    
  )
  
}