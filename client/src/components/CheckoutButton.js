import React, { useState } from 'react';
import axios from 'axios';

function CheckoutButton() {
  const [customer_id, setCustomerId] = useState('');
  const [shipping_method, setShippingMethod] = useState('');

  const handleCheckout = async () => {
    try {
      const res = await axios.post('/checkout', { customer_id, shipping_method });
      console.log(res.data); // Do something with the response data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <label>
        Customer ID:
        <input type="text" value={customer_id} onChange={(e) => setCustomerId(e.target.value)} />
      </label>
      <br />
        <label>
        Shipping Method:
        <input type="text" value={shipping_method} onChange={(e) => setShippingMethod(e.target.value)} />
        </label>
      <br />
      <button onClick={handleCheckout} disabled={!customer_id}>
        Checkout
      </button>
    </div>
  );
}

export default CheckoutButton;