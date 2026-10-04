// Write your code here

// Array to store product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}

// Function to add a new product to the array
function addProduct(productName) {
  products.push(productName);
}

// Function to update the name of a product at a given position
function updateProductName(position, newName) {
  products[position] = newName;
}

// Function to remove the last product from the array
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
