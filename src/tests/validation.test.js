import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation', () => {


	
  
  test('ska returnera true för ett giltigt cart object', () => {
    // Arrange
    const expected = true;

    // Act
    const actual = isCartItem(exampleCartObject);

    // Assert
    expect(actual).toBe(expected);
	});

	  test('ska returnera false om id inte är ett nummer', () => {
		//Arrange
		const invalidCartObject = {
      id: "hej",
      amount: 1,
      item: exampleProduct
    };
	const expected = false;
	//Act
	const actual = isCartItem(invalidCartObject)
	//Assert
	 expect(actual).toBe(expected);


  });
  test('ska returnera false om amount inte är ett nummer', () => {
  // Arrange
  const invalidCartObject = {
    id: 2001,
    amount: "ett", // here is wrong
    item: exampleProduct
  };
  const expected = false;

  // Act
  const actual = isCartItem(invalidCartObject);

  // Assert
  expect(actual).toBe(expected);
});
test('ska returnera false om item inte är ett objekt', () => {
  // Arrange
  const invalidCartObject = {
    id: 1,
    amount: 1,
    item: "hej" // string here
  };
  const expected = false;

  // Act
  const actual = isCartItem(invalidCartObject);

  // Assert
  expect(actual).toBe(expected);
});

 test('ska returnera false om id inte är ett nummer', () => {
    const invalidProduct = {
      id: "abc",
      name: 'Badanka',
      price: 500
    };
    const expected = false;

    const actual = isProduct(invalidProduct);

    expect(actual).toBe(expected);
  });


  test('ska returnera false om name inte är string',()=>{
	const invalidProduct={

	 id: 1001,
      name: 10,
      price: 500
	};
	  const expected = false;

    const actual = isProduct(invalidProduct);

    expect(actual).toBe(expected);

  })
 
  test ('ska returnera false om price är inte number',()=>{
	const invalidProduct={
			id: 1001,
	name: 'Badanka',
	price: 'hej'
};
  const expected = false;

    const actual = isProduct(invalidProduct);

    expect(actual).toBe(expected);
	})

  test ('ska returnera true for gilligt object',()=>{
	const invalidProduct={
			id: 1001,
	name: 'Badanka',
	price: 500
};
  const expected = true;

    const actual = isProduct(invalidProduct);

    expect(actual).toBe(expected);
	})
  });



   

 

	// Använd en "test" eller "it" (de är synonymer) för varje testfall
	/* Exempel på syntax:
	test('beskriv testfallet', () => {
		// här skriver du testkoden
		// avsluta alltid med "expect"
	})
	*/


	// ---------------------------------------------
	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten och du t.ex. vill skriva på svenska i stället för engelska.
	// (Ta bort dessa kommentarer när du är klar)

	// 1. it returns true for a valid cart object
	// 2. it returns false for invalid cart objects

	// 3. it returns true for a valid product
	// 4. it returns false for invalid cart objects