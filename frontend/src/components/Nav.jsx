import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { useAuth } from "../hook/useAuth.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import CartModal from "../pages/cart/CartModal.jsx";

const Nav = () => {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()
    const [isSignOutButtonVisible, setSignOutButtonVisibility] = useState(false);
    const [isCartModalOpen, setCartModalOpen] = useState(false);

    const openCartModal = () => {
        setCartModalOpen(true);
    };

    const closeCartModal = () => {
        setCartModalOpen(false);
    };

    const handleUserClick = () => {
        setSignOutButtonVisibility(!isSignOutButtonVisible);
    };

    const handleSignOut = () => {
        signOut(() => navigate('/login', { replace: true }));
    };

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={129}
                        height={59}
                        className='m-0 w-[129px] h-[59px]'
                    />
                </a>
                <div className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    <Link className="font-montserrat leading-normal text-lg text-black hover:opacity-50" to="/">Главная</Link>
                    <Link className="font-montserrat leading-normal text-lg text-black hover:opacity-50" to="/">Магазин</Link>
                    <Link className="font-montserrat leading-normal text-lg text-black hover:opacity-50" to="/">О нас</Link>
                    <Link className="font-montserrat leading-normal text-lg text-black hover:opacity-50" to="/">Связь с нами</Link>
                    <Link
                        className="font-montserrat leading-normal text-lg text-blue hover:opacity-50"
                        onClick={openCartModal}
                    >
                        <ShoppingCart size={28} />
                    </Link>
                    <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
                </div>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <div>[</div>
                    <div className="hover:cursor-pointer hover:opacity-40" onClick={handleUserClick}>{user}</div>
                    <div>]</div>
                    {isSignOutButtonVisible && (
                        <button
                            className="hover:opacity-40"
                            onClick={handleSignOut}
                        >
                            Выход
                        </button>
                    )}
                </div>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25}/>
                </div>
            </nav>
        </header>
    );
};

export default Nav;