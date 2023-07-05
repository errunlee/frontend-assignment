const reducer=(state,action)=>{
    if(action.type==='ADD_TO_CART'){  
    let {id,price,amount,image,title}=action.payload;
    const newItem={id,price,amount,image,title};
    return{ ...state,
      cart:[...state.cart,newItem]}
    }

if (action.type === 'GET_TOTALS') {
  let { total, amount } = state.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;

      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );
  total = parseFloat(total.toFixed(2));

  return {
    ...state,
    total,
    amount,
  };
}

  
}
export default reducer;