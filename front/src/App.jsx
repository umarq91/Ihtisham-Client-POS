import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KapraEntryPage from './pages/KapraEntryPage'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import Relations from './pages/Relations'
import SingleRelationPage from './pages/SingleRelationPage'
import RelationEntry from './pages/RelationEntry'
import Navbar from './components/Navbar'
import StocksPage from './pages/StockPage'
import SingleStockPage  from './pages/SIngleStockspage'
import StockHistory from './pages/StockHistoryPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Navbar/>


      <Routes>

        <Route path="/" element={<Main />}/>
        <Route path="/productentry" element={<KapraEntryPage />}/>
      
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/products/:id" element={<SingleProductPage />}/>
        <Route path="/relationentry" element={<RelationEntry />}/>

        <Route path="/relations" element={<Relations />}/>
        <Route path="/relations/:id" element={<SingleRelationPage />}/>

        <Route path="/stocks" element={<StocksPage />}/>
        <Route path="/stocks/:id" element={<SingleStockPage />}/>


        <Route path="/stockhistory" element={<StockHistory />}/>







      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
