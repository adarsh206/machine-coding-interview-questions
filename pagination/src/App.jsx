
import { useEffect, useState } from 'react';
import './App.css'

const ProductCard = ({image, title}) => {
  return <div className='product-card'>
    <img src={image} alt={title} className='product-img'/>
    <span>{title}</span>
  </div>
}

const PAGE_SIZE = 10;

function App() {

  const [products, setProducts] = useState([]);
 
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  return !products.length ? <h1>Loading ... </h1> : (
  <div className='App'>
    <h1>Pagination</h1>
     <div className='pagination-container'>
      {
        [...Array(noOfPages).keys().map(n => <span className='page-number' key={n}>{n}</span>)]
      }
    </div>
    <div className='products-container'>
      {
        products.map((p) => <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>)
      }
    </div>
   
   
  </div>
  )
}

export default App
