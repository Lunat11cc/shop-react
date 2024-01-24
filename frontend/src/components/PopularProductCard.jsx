import { star } from "../assets/icons";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContextProvider.jsx";

const PopularProductCard = (props) => {
    const { id, imgURL, name, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const [buttonText, setButtonText] = useState(
        cartItems[id] ? "Добавлено!" : "Купить"
    );

    const handleBuyClick = () => {
        addToCart(id);
        setButtonText("Добавлено!");
    };

    useEffect(() => {
        setButtonText(cartItems[id] ? "Добавлено!" : "Купить");
    }, [cartItems, id]);

    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt='rating icon' width={24} height={24} />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
                {name}
            </h3>
            <p className='mt-2 font-semibold font-montserrat text-blue text-2xl leading-normal'>
                {price}
            </p>
            <div className="mt-4">
                <button
                    className={`rounded-full text-white flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
                        cartItems[id] ? "bg-green-400" : "bg-blue"
                    } hover:opacity-50`}
                    onClick={handleBuyClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PopularProductCard;
