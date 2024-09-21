import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages";
import AboutPage from "./pages/About.tsx";
import ProductsPage from "./pages/Products.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
