import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const MOCKAPI_URL_STORE =
        'https://64118c946a69ae7545207e4f.mockapi.io/ps_store';
    const MOCKAPI_URL_CART = 'https://64118c946a69ae7545207e4f.mockapi.io/cart';
    const MOCKAPI_URL_FAVORITES =
        'https://642367f0001cb9fc203e9adf.mockapi.io/favorites';

    useEffect(() => {
        axios.get(MOCKAPI_URL_STORE).then((response) => setData(response.data));
        axios
            .get(MOCKAPI_URL_CART)
            .then((response) => setCartItems(response.data));
        axios
            .get(MOCKAPI_URL_FAVORITES)
            .then((response) => setFavorites(response.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post(MOCKAPI_URL_CART, obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveFromCart = (id) => {
        axios.delete(`${MOCKAPI_URL_CART}/${id}`);
        setCartItems((prev) => prev.filter((el) => el.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((el) => el.id === obj.id)) {
                axios.delete(`${MOCKAPI_URL_FAVORITES}/${obj.id}`);
                setFavorites((prev) => prev.filter((el) => el.id !== obj.id));
            } else if (!JSON.stringify(favorites).includes(obj.title)) {
                const { data } = await axios.post(MOCKAPI_URL_FAVORITES, obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Failed to add to favorites');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='bg-gray-100 shadow-lg rounded-2xl max-w-7xl my-12 mx-auto'>
            {cartOpen && (
                <Cart
                    onRemove={onRemoveFromCart}
                    items={cartItems}
                    isClosed={() => {
                        setCartOpen(false);
                        document.body.style.overflow = '';
                    }}
                />
            )}
            <Header
                isOpen={() => {
                    setCartOpen(true);
                    document.body.style.overflow = 'hidden';
                }}
            />
            <Routes>
                <Route
                    path='/'
                    exact
                    element={
                        <Home
                            data={data}
                            searchValue={searchValue}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                            onChangeSearchInput={onChangeSearchInput}
                        />
                    }
                />
                <Route
                    path='/favorites'
                    element={
                        <Favorites
                            data={favorites}
                            onAddToFavorite={onAddToFavorite}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
