import { useState } from 'react';
import './deliver.css';
import { Link } from 'react-router-dom';
import qr from '../../Food_img/qr.png';

export default function Deliver({ deliverTotal, paymentmethod }) {
  const [payment, setPayment] = useState(null);

  return (
    <>
      <div className="deliver-overall">
        <div className="cart-nav-background"></div>

        <form autoComplete="off" className="deliver-information-form">
          <h2>Delivery Information</h2>
          <input type="text" placeholder="Enter Your Name.." required />
          <input type="number" placeholder="Enter Your Mobile Number.." required />
          <div className="address">
            <textarea placeholder="Enter Your Address..." required></textarea>
            <div className="state">
              <input type="text" placeholder="Enter State.." required />
              <input type="text" placeholder="Enter City.." required />
            </div>
          </div>
        </form>

        <div className="deliver-total-box">
          <h2>Cart Total</h2>
          <table className="delivery-total-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{deliverTotal}.00</td>
              </tr>
              <tr>
                <td>Delivery Fee</td>
                <td>10.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{deliverTotal + 10}.00</td>
              </tr>
            </tbody>
          </table>

          <br />

          <form className="payment-choose" method="post">
            <div className="pay-choose">
              <input
                type="radio"
                name="Delivery"
                id="net"
                value={0}
                onChange={(e) => setPayment(Number(e.target.value))}
                required
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="net">Net Banking</label>
            </div>

            <div className="pay-choose">
              <input
                type="radio"
                name="Delivery"
                id="cash"
                value={1}
                onChange={(e) => setPayment(Number(e.target.value))}
                required
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="cash">Cash on Delivery</label>
            </div>

            {payment === 0 || payment === 1 ? (
              <Link to="/my_order">
                <button
                  className="payment-btn"
                  type="submit"
                  onClick={() => paymentmethod(payment)}
                >
                  Proceed to Payment
                </button>
              </Link>
            ) : null}

            {payment === 0 ? (
              <div className="qr-code-box">
                <img src={qr} className="qr-img" alt="QR Code" />
                <p>Scan & Pay</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
}
