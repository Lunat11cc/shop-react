import Cart from "./Cart.jsx";
import "./CartModal.css"

const CartModal = ({ isOpen, onClose }) => {

    return (
        <div className={`modal-overlay ${isOpen ? "visible" : "hidden"}`}>
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    Закрыть
                </button>
                <Cart />
            </div>
        </div>
    );
};

export default CartModal;
