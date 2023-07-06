import {useState,useContext,useEffect} from 'react'
import {AppContext} from '../context/Appcontext'

export default function Searchside({categories,getAllProducts}){
  const {setCategory,searchItem}=useContext(AppContext)
  const [query,setQuery]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    searchItem(query)
  }
 
 
  return(
<div className='search-side'>
<form onSubmit={handleSubmit} ><input value={query} onChange={((e)=>{setQuery(e.target.value)})} type='text' placeholder='Find a product' className='p-2 border-0' ></input><button type='submit' className='btn btn-primary btn-sm'>Search</button></form >
<p className='fw-bolder h5 mt-3'>
Categories
</p>
  <div className='d-flex flex-column'>
    {categories && categories.map((category)=>{
  return <p onClick={()=>setCategory(category)} className='category text-capitalize m-0 text-secondary' key={category}>{category}</p>
    })}
    <p onClick={()=>getAllProducts()} className='text-danger category'>Remove filter</p>
  </div>
</div>
    
  )
}