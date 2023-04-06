import AppContext from '../context';
import { useContext } from 'react';

const useTotal = () => {
    const { cartItems, setCartItems, MOCKAPI_URL_CART } =
        useContext(AppContext);
    const total = cartItems.reduce((sum, obj) => sum + Number(obj.price), 0);
    return { cartItems, setCartItems, MOCKAPI_URL_CART, total };
};

export default useTotal;
