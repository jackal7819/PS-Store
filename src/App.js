import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import { RiSearchLine } from 'react-icons/ri';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const MOCKAPI_URL = 'https://64118c946a69ae7545207e4f.mockapi.io/ps_store';

    const games = data.map((game) => (
        <Card
            key={game.id}
            title={game.title}
            image={game.image}
            price={game.price}
            onPlus={(obj) => handleAddToCart(obj)}
        />
    ));

    useEffect(() => {
        fetch(MOCKAPI_URL)
            .then((response) => response.json())
            .then((result) => setData(result));
    }, []);

    const handleAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    return (
        <div className='bg-gray-100 shadow-lg rounded-2xl max-w-7xl my-12 mx-auto'>
            {cartOpen && (
                <Cart
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
            <div className='p-10'>
                <div className='flex items-center justify-between mb-5 flex-wrap gap-5'>
                    <h1 className='font-bold text-3xl'>PS5 Games</h1>
                    <div className='flex items-center bg-white rounded-md pl-2 w-64'>
                        <RiSearchLine size={25} className='fill-slate-400' />
                        <input
                            type='search'
                            placeholder='Search...'
                            className='p-2 outline-0 border-0'
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-5 flex-wrap'>
                    {games}
                </div>
            </div>
        </div>
    );
};

export default App;
