import axios from 'axios';
import Card from '../components/Card';
import { useState, useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const MOCKAPI_URL_ORDERS =
        'https://642d910c66a20ec9cea10382.mockapi.io/orders';

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get(MOCKAPI_URL_ORDERS);
                setOrders(data);
                setLoading(false);
            } catch {
                alert('Failed to get orders');
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className='p-10'>
            <h1 className='font-bold text-3xl mb-5'>My Orders</h1>
            <div>
                {loading ? (
                    <div className='flex justify-center gap-[58px] flex-wrap sm:justify-start'>
                        {[...Array(8)].map((game, index) => (
                            <Card key={index} isLoading={loading} />
                        ))}
                    </div>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className='mb-[58px]'>
                            <h2 className='font-bold text-2xl mb-5'>
                                Order #{order.id}
                            </h2>
                            <div className='flex justify-center gap-[58px] flex-wrap sm:justify-start'>
                                {order.items.map((game, index) => (
                                    <Card key={index} {...game} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;
