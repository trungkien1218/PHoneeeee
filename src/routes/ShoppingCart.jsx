import React, { useContext } from 'react'
import { CartContext } from '../context/Cart-context'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import { Button } from 'antd'
import { useParams } from 'react-router-dom'

const ShoppingCart = () => {
  const { productId } = useParams();

  const { items } = useShoppingCartContext();

  console.log(items);
  return (
    <>
      <main>
        <h1>ShoppingCart page</h1>
        <div>Cart list</div>
        {items.map(product => (
          <div key={product.id} to={`/items/${product.id}`}>
            <div className='flex'>
              <div className='cart-prd'>
                <div className='cart-img'>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <h1 className=''>
                  {product.title}
                </h1>
                <div className=''>
                  Price:{product.price}
                </div>
              </div>
              <div>
                <Button>giảm</Button>
                 <span>{product.quantity}</span> 
                <Button>tăng</Button>
              </div>
            </div>

          </div>
        ))}
      </main>
    </>
  )
}

export default ShoppingCart