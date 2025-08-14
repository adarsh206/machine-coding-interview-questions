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
       {product ? (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        // this is not the right way to do loading, create a separate state for this
        // This is temporary solution for breadcrumbs tutorial
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetails