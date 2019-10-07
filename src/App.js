import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import {ProductContext} from './context/ProductContext'
import {CartContext} from './context/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products}}>	
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>
			</ProductContext.Provider>
		   <CartContext.Provider value={cart}>
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
		</div>
	);
}

export default App;
