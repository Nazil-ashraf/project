import { useLocation } from 'react-router-dom'
import './cart.scss'
import Card from '../../component/Card/card';
import { useEffect, useState } from 'react';

const Cart = ()=>{
    const state = useLocation();
    const [addingProduct,setAddingProduct] =useState()

    useEffect(()=>{
        if(state?.state){
            setAddingProduct(state?.state?.product)
        }
    },[state?.state])

    return(
      <div className="cart-page">
       {addingProduct?.map((item=> 
       <Card setAddingProduct={setAddingProduct} productData={item}  listOfProduct={addingProduct}/>
        ))}
      </div>
    )
}
export default Cart