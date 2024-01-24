import { createContext, useState } from "react";
import { products } from "../constants/index.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                if (itemInfo && !isNaN(Number(itemInfo.price.replace('$', '')))) {
                    totalAmount += cartItems[item] * Number(itemInfo.price.replace('$', ''));
                }
            }
        }
        return Number(totalAmount.toFixed(2));
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const checkout = () => {
        setCartItems(getDefaultCart());
    }

    const contextValue = {
        cartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        checkout
    }

    return (
        <div>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;