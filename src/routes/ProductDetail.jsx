import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext';
import { useShoppingCartContext } from '../hooks/useShoppingCartContext';



export const ProductDetail = () => {
    const { productId } = useParams();

    const { findProductById } = useAppContext();

    const {onAddItem} = useShoppingCartContext()

    const product = findProductById(productId);
    const handleAddItem = () => {
        onAddItem({productId: product.id,quantity:1})
        ///alert(`Đã thêm sản phẩm vào giỏ hàng ${product.title} vào giỏ hàng`)
    }
    return (
        <main className='main-detail'>
            <div className='container  '>
                <div className='prd-detail'>
                    <div className='prd-detail-img' >
                        <img className='prd-d-img' src={product.thumbnail} alt={product.title} />
                    </div>
                    <div>
                        <h1  className='prd-text'>{product.title}</h1>
                        <div className='prd-text'>Category:{product.category}</div>
                        <div className='prd-text'>Brand:{product.brand}</div>
                        <div className='prd-text'>Description:{product.description}</div>
                        <div className='prd-text'>Price:{product.price}</div>
                        <button onClick={handleAddItem} className='btn-add'>Add to cart</button>
                    </div>
                </div>
            </div>
        </main>

    )
}

