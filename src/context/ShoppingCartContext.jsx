//thêm sửa , xóa, sản phẩm khỏi giỏ hàng

import { createContext, useReducer } from "react";
import { AppContext } from "./AppContext";
import { useAppContext } from "../hooks/useAppContext";

// dữ liệu trong giỏ hàng
export const ShoppingCartContext = createContext({});




export const shoppingCartReducer = (state, action) => {
    let newItems;

    switch (action.type) {
        case "ADD_ITEM": {
            const exist = state.items.find(                           //// đoạn này là thêm sản phẩm vào giỏ hàng  cái find kia có tác dụng là tìm kiếm

                (item) => item.productId === action.payload.productId
            );
            if (exist) { ///// đây nếu trong hàm mà có cái exist (tức là có sản phẩm mình vừa chọn rồi) thì tăng số lượng sản phẩm hay là quantity lên
                const newItems = state.items.map(item =>
                    item.productId === exist.productId
                        ? {
                            ...item, quantity: item.quantity + action.
                                payload.quantity
                        }
                        : item
                );
                return { ...state, items: newItems }
            } else {
                return { ...state, items: [...state.items, action.payload] }
            }
        }

        case "INCREASE_QUANTITY": {
            newItems = state.items.map((item) =>
                item.productId === action.payload.productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            return {
                ...state,
                items: newItems,

            }
        }
        case "DECREASE_QUANTITY": {
            newItems = state.items.map((item) => {
                if (item.productId === action.payload.productId) {

                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null;
                    }
                }
                return item;
            });

            newItems = newItems.filter((item) => item !== null);
            return {
                ...state,
                items: newItems,
            };
        }
        case "REMOVE_ITEM": {
            newItems = state.items.filter(
                (item) => item.productId !== action.payload.productId
            );
            return {
                ...state,
                items: newItems,
            };

        }
        case "CLEAR_CART": {

        }
        case "TOTAL_PRICE": {
            const initialTotalPrice = state.items.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            );
            return {
                ...state,
                totalPrice: initialTotalPrice,
            }

        }
        default: {
            throw new Error("Invalid action type")
        }
    }
}

const initialState = {
    items: [],
    totalPrice: 0,
}


const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

    const { findProductById } = useAppContext();

    const handleAddItem = ({ productId, quantity = 1 }) => {
        dispatch({ type: "ADD_ITEM", payload: { productId, quantity } })
    }
    const handleIncreItem = ({ productId, quantity }) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: { productId, quantity } })
    }
    const handleDecreItem = ({ productId, quantity }) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: { productId, quantity } })
    }


    const totalPrice = state.items.map((item) => item.price)

    const totalItems = state.items.length;

    const items = state.items.map((item) => ({
        product: findProductById(item.productId), ////// chuyển cái productId thành cái thông tin sản phẩm (product) nó sẽ có tên có giá có honhf ảnh có mổ tả
        quantity: item.quantity,                  ///// và đi kèm với quantity số lượng 

    }))


    return (
        <ShoppingCartContext.Provider
            value={{
                ...state, items, totalItems,totalPrice,
                onAddItem: handleAddItem,
                onIncreItem: handleIncreItem,
                onDecreItem: handleDecreItem,

            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
};

export default ShoppingCartProvider