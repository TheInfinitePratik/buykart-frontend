import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrums/Breadcrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DiscriptionBox from '../Component/DiscriptionBox/DiscriptionBox'
import ReletedProducts from '../Component/ReletedProducts/ReletedProducts'



const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox />
      <ReletedProducts />
      
    </div>
  )
}

export default Product