import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((res) => {
          
          setProduct(res);
        })
      }, [])

      console.log(product)

  return (
    <div>
      <h2>ProductDetails Page</h2>
    </div>
  )
}

export default ProductDetails