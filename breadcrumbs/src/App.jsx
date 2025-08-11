
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Breadcrumbs</h1>
        {/** Breadcrumbs */}
        {/** Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>

      </div>
   </BrowserRouter>
  )
}

export default App
