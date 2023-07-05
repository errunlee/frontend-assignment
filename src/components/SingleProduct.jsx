
import React from 'react'
import { Link } from 'react-router-dom'


function SingleMovie({singleProduct}) {
    const {id,title,description,price,rating,image}=singleProduct;
      const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
  return (
   <Link onClick={handleClick} className='view-link text-decoration-none' to={`/product/${id}`}> <div className='singleMovie shadow m-2 rounded d-flex align-items-end  position-relative '  style={{backgroundImage:`url(${image})`}}>
      <div className="title p-2 w-100 text-white">
      <p className='text-center text-shadow-lg m-0 '>{title}</p>
      </div>
     <span className='position-absolute p-2 rounded'>${price}</span>
    </div>
   
   </Link>
  )
}

export default SingleMovie
