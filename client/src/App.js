import './App.css';
import React from 'react';
import Register from './components/Authenticate';
import Login from './components/Login';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeLogin from './components/EmployeeLogin';
import InventoryCreate from './components/InventoryCreate';
import UpdateCustomer from './components/UpdateCustomer';
import UpdateEmployee from './components/UpdateEmployee';
import UpdateInventory from './components/UpdateInventory';
import CreateOrders from './components/CreateOrder';
import UpdateOrder from './components/UpdateOrder';
import RemoveCustomer from './components/RemoveCustomer';
import RemoveEmployee from './components/RemoveEmployee';
import RemoveInventory from './components/RemoveInventory';
import RemoveOrder from './components/RemoveOrder';
import NavBar from './components/NavBar';
import LoggedInUser from './components/LoggedInUser';
import LogoutButton from './components/LogoutButton';
import AddToCart from './components/AddToCart';
import RemoveCartItem from './components/RemoveCartItem';
import UpdateCartItemQuantity from './components/UpdateCartItemQuantity';
import CheckoutButton from './components/CheckoutButton';
import DisplayShoppingCartItems from './components/DisplayShoppingCartItems';
import DisplayOrderByCustomerID from './components/DisplayOrderByCustomerID';
import DisplayOrderItems from './components/DisplayOrderItems';
import DisplayItemByItemID from './components/DisplayItemByItemID';
import DisplayOrdersAndItemsByCustomerID from './components/DisplayOrdersAndItemsByCustomerID';
import BulkAddToCart from './components/BulkAddToCart';
import DisplayOrders from './components/DisplayOrders';
import UpdateStock from './components/UpdateStock';



const App = () => {
  return (
    <div>
      <NavBar />
      <LoggedInUser />
      <Register />
      <Login />
      <LogoutButton />
      <EmployeeCreate />
      <EmployeeLogin />
      <InventoryCreate />
      <CreateOrders />
      <UpdateCustomer />
      <UpdateEmployee />
      <UpdateInventory />
      <UpdateOrder />
      <RemoveCustomer />
      <RemoveEmployee />
      <RemoveInventory />
      <RemoveOrder />
      <AddToCart />
      <BulkAddToCart />
      <RemoveCartItem />
      <UpdateCartItemQuantity />
      <CheckoutButton />
      <DisplayOrders />
      <DisplayShoppingCartItems />
      <DisplayOrderByCustomerID />
      <DisplayOrderItems />
      <DisplayItemByItemID />
      <DisplayOrdersAndItemsByCustomerID />
      <UpdateStock />

    
    </div>
  );
};

export default App;