import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import { FaStar } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Loader from '../components/Loader';
export default function Detailpage(){
  const {addToCart,total,loading,setLoading}=useContext(AppContext)
  const { id } = useParams();
  const [detail, setDetail] = useState('')
  const [amount,setAmount]=useState(1)

  // increse or decrease amount;
  const increaseAmount=()=>{
    setAmount(amount+1)
  }
  const decreaseAmount=()=>{
    if(amount===0){
      return ;
    }
    setAmount(amount-1)
  }
  
  //getting the deetail of product with above id;

  const getDetail=async()=>{
    setLoading(true)
    const res=await fetch(`https://fakestoreapi.com/products/${id}`);
    const data=await res.json();
    setDetail(data)
    setLoading(false)
  }
  useEffect(()=>{
  getDetail();
  },[])
  const {title,description,image,price,rating,category}=detail;
  if(loading){
    return <Loader/>
  }
  return (
    <div>
    <h2 className='text-uppercase pathname py-3'>/ Products / {detail.title}</h2>
    <div className='container'>
    <Link to='/products' className='my-3 p-1 btn btn-secondary rounded-0'>BACK TO PRODUCTS</Link>
      <div className='row justify-content-between my-4 '>
      <div className='col-md-4'>
      <img src={image} className='img-fluid'/>
      </div>
      <div className=' col-md-6'>
      <h2 className='fw-bolder'>{title}</h2>
        {rating && <div className='d-flex align-items-center'><FaStar color="yellow"/> <span className='mx-1 fw-bold'>{rating.rate}/5</span>({rating.count} customer reviews)</div> }
        <p className='my-2 h3 text-secondary fw-bold '>${price}</p>
        <p className='capitalize-first'>{description}</p>
        <p className='text-capitalize'><strong>Category</strong> : {category}</p>
        <hr></hr>
       <div className='amount d-flex align-items-center'>
         <AiOutlineMinus className='sign' onClick={decreaseAmount}/>
        <p className='my-0 mx-3 fw-bolder'>{amount}</p>
         <AiOutlinePlus className='sign' onClick={increaseAmount}/>       
       </div>
        <Link className='text-decoration-none text-dark' to='/cart'><button onClick={()=>addToCart(id,price,amount,image,title)} className='btn btn-warning fw-bold text-uppercase p-2'>Add to Cart</button></Link>
      </div>
      </div>
    </div>
    </div>
  )
}