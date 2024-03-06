import OrderRow from './OrderRow';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import items from '../data/items';

function OrderTable({ items }) {
  return (
    <div className="table-layer">
    <h2>Order</h2>
    <p>Select the quantity of the items you want to buy</p>
    <Link to = "/">Home</Link>
    <Link to = "/order">Shop</Link>
    <Link to = "/registration">Registration</Link>
    <table className="table-block">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th> {}
        </tr>
      </thead>
      <tbody>
        {items.map(item => <OrderRow key={item.name} item={item} />)}
      </tbody>
    </table>

    </div>

  );
}

export default OrderTable;
