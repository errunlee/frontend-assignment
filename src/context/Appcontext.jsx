import {createContext,useState,useEffect,useReducer} from 'react'
import reducer from './reducer'
const AppContext=createContext();

const AppProvider=({children})=>{
  const [allProducts,setAllProducts]=useState([])
  const [loading,setLoading]=useState(false)
  // getting all products;
  const url='https://fakestoreapi.com/products'
  const getAllProducts=async()=>{
    setLoading(true)
    const res=await fetch(url)
    const data=await res.json();
    setAllProducts(data)
    setLoading(false)
  }

  //getting categories

  const [categories,setCategories]=useState(null)
  const getCategories=async ()=>{
    const url='https://fakestoreapi.com/products/categories'
    const res=await fetch(url)
    const data=await res.json();
    setCategories(data)
  }

  // setting products according to category
  const setCategory=async (categorytype)=>{
    setLoading(true)
    const url=`https://fakestoreapi.com/products/category/${categorytype}`
    const res=await fetch(url)
    const data=await res.json();
    setAllProducts(data)
    setLoading(false)
  }

// search 
   const searchItem =async (query) => {
    
   const url='https://fakestoreapi.com/products'
  let data;
  try{
    setLoading(true)
    const res=await fetch(url)
    data=await res.json();
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setAllProducts(filteredProducts);
    setLoading(false)
  }
  catch{
    console.log('err')
  }
  };
  
      
  // adding to cart
  
    const initialState={
        total:0,
        amount:0,
        cart:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState)

  const addToCart=(id,price,amount,image,title)=>{
    dispatch({type:'ADD_TO_CART',payload:{id,price,amount,image,title}});
  }
     useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
 return (
  <AppContext.Provider value={{getAllProducts,allProducts,setAllProducts,getCategories,categories,addToCart,...state,setCategory,searchItem,loading,setLoading}}>{children}</AppContext.Provider>   
 ) 
}

export {AppContext,AppProvider}