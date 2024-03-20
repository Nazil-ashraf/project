import { Link, useNavigate } from 'react-router-dom'
import './home.scss'
import { useEffect, useState } from 'react'
import { URL, constant } from '../../constant'
import axios from 'axios'
import Card from '../../component/Card/card'
import { Button } from '@mui/material'
const Home = ()=>{

const [productData,setProductData]=useState()
const [addingProduct,setAddingProduct]=useState([]);
const navigation = useNavigate();

useEffect(()=>{

    axios.get(URL).then((response) => {
        setProductData(response.data);
      });
},[])

const handleNavigation =()=>{
    navigation('/cart',{ state:{ product :addingProduct}})
}

   
    return(
        <div className="home-page">
      
          <div className="home-page--flex">
              <div className="home-page--flex--heading">
                {constant?.title}
              </div>
              <button className="home-page--flex--cart" onClick={handleNavigation}>
              {constant?.cart}
              </button>
          </div>

          <div className='home-page--container'>
            {productData?.map((item)=> 
                <Card productData={item} setAddingProduct={setAddingProduct} home={true} />
            )}
        
          </div>
        </div>
    )
}
export default Home