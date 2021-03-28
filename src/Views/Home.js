import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequest';


function Home() {

  const url = 'https://6033a638843b15001793146f.mockapi.io/api/v1/products?page=1&limit=10'

  let products = useAxiosGet(url)
  
  let content = null

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>
  }

  if(products.loading){
        content = <Loader></Loader>
    }


  if(products.data){
    content = 
    products.data.map((product) => 
        <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
            <ProductCard 
                product={product}
            />
        </div>
    )
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  )
}
export default Home