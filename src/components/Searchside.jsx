import {useState,useContext,useEffect} from 'react'
import {AppContext} from '../context/Appcontext'
export default function Searchside({categories,getAllProducts}){
const {setCategory,searchItem}=useContext(AppContext)
  const [query,setQuery]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    searchItem(query)
  }
  useEffect(()=>{
    searchItem(query)
  },[query])
  return(
<div className='search-side'>
<form onSubmit={handleSubmit} ><input value={query} onChange={((e)=>{setQuery(e.target.value)})} type='text' placeholder='Search here' className='p-1 border-0' ></input></form >
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