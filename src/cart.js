/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"



let cart = []
let idCounter = 2002
// -------------------------------------------------- //

function clearCart() {
  cart = [];
  idCounter = 2002;
}
function getCartItemCount() {
  return cart.reduce((sum, cartItem) => sum + cartItem.amount, 0);
}


function getItem(index){
	return cart[index]
}
function getTotalCartValue() {
  return cart.reduce((sum, cartItem) => {
    return sum + (cartItem.item.price * cartItem.amount);
  }, 0);
}



function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const cartItem = { id: idCounter, amount: 1, item: newItem }
	idCounter++
	cart.push(cartItem)
}
function removeFromCart(itemId) {
  cart = cart.filter(cartItem => cartItem.id !== itemId);
}

function editCart(itemId, newValues) {
  const item = cart.find(item => item.id === itemId);
  if (!item) return;
  Object.assign(item, newValues);
}



export { getCartItemCount,getItem,getTotalCartValue, addToCart,removeFromCart,editCart,clearCart};
