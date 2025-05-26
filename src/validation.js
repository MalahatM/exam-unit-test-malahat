// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat


function isCartItem(obj) {
  return (
   typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'number' &&
    'amount' in obj &&
    typeof obj.amount === 'number' &&
    'item' in obj &&
    typeof obj.item === 'object' &&
    obj.item !== null
  );
}

function isProduct(obj) {
	return(
		typeof obj === 'object' &&
		 obj !== null &&
		 'id' in obj &&
    typeof obj.id === 'number'
	)
}


export { isCartItem, isProduct }
