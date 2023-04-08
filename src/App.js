import { useEffect, useState } from 'react';
import AppContext from './context';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Cart from './components/Cart';
import Orders from './pages/Orders';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);

    const MOCKAPI_URL_STORE =
        'https://64118c946a69ae7545207e4f.mockapi.io/ps_store';
    const MOCKAPI_URL_CART = 'https://64118c946a69ae7545207e4f.mockapi.io/cart';
    const MOCKAPI_URL_FAVORITES =
        'https://642367f0001cb9fc203e9adf.mockapi.io/favorites';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartResponse = await axios.get(MOCKAPI_URL_CART);
                const favoritesResponse = await axios.get(
                    MOCKAPI_URL_FAVORITES
                );
                const dataResponse = await axios.get(MOCKAPI_URL_STORE);

                setLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setData(dataResponse.data);
            } catch (error) {
                alert('Failed to get data');
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(
                (item) => Number(item.gameId) === Number(obj.id)
            );
            if (findItem) {
                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.gameId) !== Number(obj.id)
                    )
                );
                await axios.delete(`${MOCKAPI_URL_CART}/${obj.id}`);
                console.log(obj.id, obj.gameId);
            } else {
                const { data } = await axios.post(MOCKAPI_URL_CART, obj);
                setCartItems((prev) => [...prev, data]);
                console.log(obj.id, obj.gameId);
            }
        } catch (error) {
            alert('Failed to work with data in the cart');
            console.error(error);
        }
    };

    const onRemoveFromCart = (id) => {
        try {
            axios.delete(`${MOCKAPI_URL_CART}/${id}`);
            setCartItems((prev) =>
                prev.filter((el) => Number(el.id) !== Number(id))
            );
        } catch (error) {
            alert('Failed to delete data from the cart');
            console.error(error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (JSON.stringify(favorites).includes(obj.title)) {
                setFavorites((prev) =>
                    prev.filter((el) => Number(el.id) !== Number(obj.id))
                );
                await axios.delete(`${MOCKAPI_URL_FAVORITES}/${obj.id}`);
                console.log(obj.id, obj.gameId, obj);
            }
            if (!JSON.stringify(favorites).includes(obj.title)) {
                const { data } = await axios.post(MOCKAPI_URL_FAVORITES, obj);
                setFavorites((prev) => [...prev, data]);
                console.log(obj.id, obj.gameId, obj);
            }
        } catch (error) {
            alert('Failed to work with data in the cart');
            console.error(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const getIsCheck = (id) =>
        cartItems.some((obj) => Number(obj.gameId) === Number(id));

    return (
        <AppContext.Provider
            value={{
                data,
                cartItems,
                favorites,
                getIsCheck,
                onAddToFavorite,
                setCartItems,
                MOCKAPI_URL_CART,
            }}>
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
                                loading={loading}
                                cartItems={cartItems}
                                favorites={favorites}
                                searchValue={searchValue}
                                onAddToCart={onAddToCart}
                                onAddToFavorite={onAddToFavorite}
                                onChangeSearchInput={onChangeSearchInput}
                            />
                        }
                    />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/orders' element={<Orders />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
};

export default App;
