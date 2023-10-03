import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const useShoppingCartContext = () =>{
    const context = useContext(ShoppingCartContext);
    return {...context}
}

