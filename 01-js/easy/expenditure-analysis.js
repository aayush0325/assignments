/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to hold the total spent by category
  const categoryTotals = {};

  // Iterate over each transaction
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    // If the category is not in the object, initialize it with 0
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the price to the total spent for the category
    categoryTotals[category] += price;
  }

  // Convert the category totals object to an array of objects
  const result = [];
  for (const category in categoryTotals) {
    result.push({ category: category, totalSpent: categoryTotals[category] });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
