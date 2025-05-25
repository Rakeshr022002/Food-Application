import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Home_Nav from './Home_nav/HomeNav';
import Menu from './Menu/menu';
import Addtocart from './Add_to_cart/AddToCart';
import Deliver from './Deliver_page/deliver';
import Myorder from './My Orders/myOrders';

import './Home.css';

export default function Home() {
    const [Cart, setCart] = useState([]);
    const [Order, setOrder] = useState([]);
    const [deliverTotal, setDeliverTotal] = useState(0);
    const [Paymentmethod, setPaymentmethod] = useState(0);

    const Addcart = (item) => {
        setCart([...Cart, { ...item, quantity: 1 }]);
        setOrder([...Order, { ...item, quantity: 1 }]);
        toast.success(`${item.name} added successfully..!`);
    };

    const deliver = (total) => {
        setDeliverTotal(total);
    };

    const paymentmethod = (method) => {
        const paymethod = method === 0 ? 'Net Banking' : 'Cash on Delivery';
        setPaymentmethod(paymethod);
        setCart([]);
        toast.success('Order placed Successfully..!');
    };

    return (
        <div className="Home-overall">
            <BrowserRouter>
                <ToastContainer theme="dark" position="top-center" autoClose={2000} />
                <Home_Nav Cart={Cart} />
                <Routes>
                    <Route path="/" element={<Menu Cart={Addcart} />} />
                    <Route
                        path="/add-to-cart"
                        element={<Addtocart Cart={Cart} setCart={setCart} deliver={deliver} Order={Order} setOrder={setOrder} />}
                    />
                    <Route
                        path="/delivery"
                        element={<Deliver deliverTotal={deliverTotal} paymentmethod={paymentmethod} />}
                    />
                    <Route
                        path="/my_order"
                        element={
                            <Myorder
                                Paymentmethod={Paymentmethod}
                                setPaymentmethod={setPaymentmethod}
                                Order={Order}
                                setOrder={setOrder}
                                deliverTotal={deliverTotal}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
