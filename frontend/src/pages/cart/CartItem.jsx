import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContextProvider.jsx";

const CartItem = (props) => {
    const { id, imgURL, name, price } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        setIsRemoved(false);
    }, [cartItems]);

    const handleRemoveClick = () => {
        removeFromCart(id);
        setIsRemoved(true);
    };

    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full mb-10'>
            <div className="flex row gap-5 justify-between pr-6">
                <img src={imgURL} alt={name} className='w-[85px] h-[85px]'/>
                <h3 className='mt-2 text-lg leading-normal font-semibold font-palanquin'>
                    {name}
                </h3>
                <p className='mt-2 font-semibold font-montserrat text-blue text-lg leading-normal'>
                    {price}
                </p>
            </div>
            <div className="mt-5 flex gap-3 justify-center ml-10 items-center">
                <button
                    className="hover:opacity-50 border:bg-black rounded-full text-black flex justify-center items-center px-3.5 py-2 border font-montserrat text-sm leading-none"
                    onClick={handleRemoveClick}
                >
                    -
                </button>
                <p className='text-sm'>{cartItems[id]}</p>
                <button
                    className="hover:opacity-50 border:bg-black rounded-full text-black flex justify-center items-center px-3.5 py-2 border font-montserrat text-sm leading-none"
                    onClick={() => addToCart(id)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;