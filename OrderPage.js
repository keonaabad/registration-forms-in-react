import React from 'react';
import OrderTable from '../components/OrderTable.jsx';
import items from '../data/items.js';

const OrderPage = () => {
  return <OrderTable items={items} />;
};

export default OrderPage;
