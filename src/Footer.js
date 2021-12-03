import React, { useContext } from 'react'
import ProductsList from './ProductsList'
import Porduct from './Product'
import ProductContext from './ProductContext'

function Footer() {
  const [products, setProducts] = useContext(ProductContext)
  return (
    <div className="footer">
      {products.map((product) => {
        return (
          <div>
            <p>Product ID: {product.id}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
