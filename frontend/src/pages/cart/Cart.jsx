import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider.jsx";
import { products } from "../../constants/index.js";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const visibleCartItems = products
        .filter(product => cartItems.hasOwnProperty(product.id) && cartItems[product.id] !== 0);

    const maxVisibleItems = 2;
    const maxHeight = maxVisibleItems * 175;

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-10 overflow-auto" style={{ maxHeight: `${maxHeight}px` }}>
                {visibleCartItems.map((product) => (
                    <CartItem key={product.id} data={product} />
                ))}
            </div>
            {cartItems.length > maxVisibleItems && (
                <div className="mt-2 text-sm">
                    <p>...and {cartItems.length - maxVisibleItems} more items</p>
                </div>
            )}
            {totalAmount > 0 ? (
                <div className="mb-10 flex gap-5 justify-center ml-10 items-center">
                    <button
                        className="hover:opacity-50 bg-blue rounded-full text-white px-7 py-4 font-montserrat text-lg"
                        onClick={() => {
                            checkout();
                            navigate('/checkout');
                        }}
                    >
                        Заказать ${totalAmount}
                    </button>
                </div>
            ) : (
                <h1>Ваша корзина пустая!</h1>
            )}
        </div>
    );
};

export default Cart;
