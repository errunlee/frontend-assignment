import { useContext } from "react"
import {Link} from 'react-router-dom'
import { AppContext } from "../context/Appcontext"
export default function Cart(){
const {cart,total}=useContext(AppContext)
  console.log(cart)
  if(cart.length<1){
    return <p className='lead text-center display-4'>No items in cart.</p>
  }
  return(
    <div className='container'>
      <h2 className='lead fw-bold text-secondary text-uppercase my-3'>Your cart summary</h2>
      <hr></hr>
      {
        cart.length>0 && cart.map((item,index)=>{
          const {id,price,amount,title,image}=item;
          return <div className='cart-item' key={id}>
            <div className='row '>
            <div className='col-md-2 col-3'>
            <img src={image} className='img-fluid'/>
            </div>
              <div className='col-6'>
              <p>{title}</p>
            <p><strong>Price :</strong> <span>$ {price}</span> </p>
            <p><strong>Quantity :  </strong><span> {amount}</span> </p>          
              </div>
            </div>
            <hr/>
          </div>
        })
      }
      <h1 className='fw-bolder'>Sub Total: $ {total}</h1>
      <button className='btn btn-warning rounded-pill'>PAY NOW</button>
      <hr></hr>
      <Link to='/products' className='btn btn-info'>SHOP MORE</Link>
    </div>
  )
}