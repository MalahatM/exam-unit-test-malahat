// importera här
import { addToCart,getItem,getTotalCartValue, getCartItemCount,removeFromCart,editCart,clearCart } from "../cart"



describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})
	
	
	// -------------------------------------------------- //
	
	test('getCartItemCount ska returnera 0 när kundvagnen är tom', () => {
		// Arrange
		clearCart(); // 
		
		// Act
		const actual = getCartItemCount();
		
		// Assert
		expect(actual).toBe(0);
	});
	
	
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }
		
		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()
		
		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})
	
	test('getItem ska returnera rätt objekt från kundvagnen med angivet index', () => {
		// Arrange
		const product = { id: 1002, name: 'Vattenpistol', price: 40 };
		addToCart(product);
		
		// Act
		const actual = getItem(0);
		
		// Assert
		expect(actual.item).toEqual(product);
	});
	
	test('getItem ska returnera undefined om index är ogiltigt', () => {
		// Arrange
		addToCart({ id: 1001, name: 'Badanka', price: 500 }); 
		
		// Act
		const actual = getItem("korv");
		
		// Assert
		expect(actual).toBeUndefined();
	});
	
	test('getItem ska returnera undefined om index är null', () => {
		// Arrange
		addToCart({ id: 1001, name: 'Badanka', price: 500 });
		
		// Act
		const actual = getItem(null);
		
		// Assert
		expect(actual).toBeUndefined();
	});
	
	
	test('getTotalCartValue ska returnera och visa summa total pris', () => {
		// Arrange
		const product1 = { id: 1001, name: 'Badanka', price: 50 };
		const product2 = { id: 1002, name: 'Vattenpistol', price: 40 };
		
		addToCart(product1); // amount = 1
		addToCart(product2); // amount = 1
		
		const expected = 90;
		
		// Act
		const actual = getTotalCartValue();
		
		// Assert
		expect(actual).toBe(expected);
	});
	
	
	test('removeFromCart tar bort rätt produkt från kundvagnen med hjälp av id', () => {
		// Arrange
		const product = { id: 1002, name: 'Vattenpistol', price: 40 };
		addToCart(product);
		const item = getItem(0);
		
		// Act
		removeFromCart(item.id);
		const count = getCartItemCount();
		
		// Assert
		expect(count).toBe(0);
	});
	
	test('editCart ska ändra antal (amount) för ett item i kundvagnen', () => {
		// Arrange
		const product = { id: 1002, name: 'Vattenpistol', price: 40 };
		addToCart(product);
		const item = getItem(0);
		
		// Act
		editCart(item.id, { amount: 2 });
		const updatedItem = getItem(0);
		
		// Assert
		expect(updatedItem.amount).toBe(2);
		expect(updatedItem.item.name).toBe("Vattenpistol");
	});
	
	
	
	// -------------------------------------------------- //
})

