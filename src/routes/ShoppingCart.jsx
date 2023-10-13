import React, { useContext } from 'react'
import { CartContext } from '../context/Cart-context'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import { Button } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const { items, totalPrice } = useShoppingCartContext();

  const { onIncreItem, onDecreItem } = useShoppingCartContext();
 
  const handleIncreItem = (product) => {
    console.log(product)
    onIncreItem({ productId: product.id, quantity: + 1 })
  }
  const handleDecreItem = (product) => {
    console.log(product)
    onDecreItem({ productId: product.id, quantity: -1 })
  }
  {/*const handleTotalPrice = (price) => {
    console.log(price)
    onTotalPrice({ productId : product.id , totalPrice : 0})
  }*/}

/// const totalP =useSelector(totalPrice);



  return (
    <>
      <main className='main-cart'>
        <h1>ShoppingCart page</h1>
        <div>Cart list</div>
        <div className='table-cart container'>
          {items.map(product => (
            <div key={product.product.id} to={`/items/${product.product.id}`}>
              <div className='flex'>
                <div className='cart-prd'>
                  <div className='cart-img'>
                    <img
                      src={product.product.thumbnail}
                      alt={product.product.title}
                      className='cart-img-prd'
                    />
                  </div>
                  <div>
                    <h1 className='cart-name'>
                      {product.product.title}
                    </h1>
                    <div className='cart-price'>
                      Price:{product.product.price}
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    /// onPrice={() => handleTotalPrice(product.price)}
                    onClick={() => handleDecreItem(product.product)}>
                    -
                  </Button>
                  <span style={{ padding: '10px' }}>{product.quantity}</span>
                  <Button
                    /// onPrice={() => handleTotalPrice(product.price)}
                    onClick={() => handleIncreItem(product.product)}>+</Button>
                </div>
              </div>
              <div className='total-price'>
                <p>Tổng tiền:</p>
                <div>{totalPrice}</div>
              </div>
            </div>
          ))}

        </div>
      </main>
    </>
  )
}

export default ShoppingCart