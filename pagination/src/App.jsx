
import { useEffect, useState } from 'react';
import './App.css'
import { PAGE_SIZE } from './constants';
import ProductCard from './components/ProductCard';


function App() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

   const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }
 
  const fetchData = async () => {
   
    try {
       const data = await fetch("https://dummyjson.com/products?limit=500");
       const json = await data.json();
       setProducts(json.products);
    } catch (error) {
      console.log(error)
    }
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
      <button className='page-number' disabled={currentPage === 0}
      onClick={() => goToPrevPage()}>◀️</button>
      {
        [...Array(noOfPages).keys().map(n => <button className={"page-number " + (n === currentPage ? "active" : "")} key={n} 
          onClick={() => handlePageChange(n)}>
            {n}
          </button>)]
      }
      <button className='page-number' disabled={currentPage === noOfPages - 1}
      onClick={() => goToNextPage()}>▶️</button>
    </div>
    <div className='products-container'>
      {
        products.slice(start, end).map((p) => <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>)
      }
    </div>
   
  </div>
  )
}

export default App
