import { Alert } from '@mui/material'
import './card.scss'
import { useEffect, useState } from 'react'
const Card = ({productData , setAddingProduct ,home ,listOfProduct})=>{

  const [openAlert,setOpenAlert] = useState();

    const handleAddToCart=(item)=>{
    
       setAddingProduct(prevState=> [...prevState,item])
       setOpenAlert(item?.title)
    }

useEffect(()=>{
if(openAlert){
    setTimeout(
        () => setOpenAlert(), 
        3000
      )
}
}   
,[openAlert])


    const RemoveFromCart =(items)=>{
        let removeArr = listOfProduct?.filter(item => item !== items)
        setAddingProduct(removeArr)
    }
 
    return(
        <div className="card" id={productData?.id}>
            <img className="card--img" height={'170px'} width={'170px'} src={productData?.image} />
            <div className='card--title'>
            {productData?.title}
            </div>
            <div className='card--price'>
            {productData?.price}
            </div>

            {home ?   <button className='card--button' onClick={()=>handleAddToCart(productData)}>
             Add To Cart
            </button> :

            <button className='card--button' onClick={()=>RemoveFromCart(productData)}>
            Remove From Cart
            </button>
            }

            {openAlert && 
<Alert  severity="success" variant='filled'>
   "{openAlert} added to the cart successfully”.
</Alert>
}
          
      

        </div>
    )
}
export default Card