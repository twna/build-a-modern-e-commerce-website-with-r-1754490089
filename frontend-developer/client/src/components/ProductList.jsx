import React from 'react';

// Product component
const Product = ({ name, price }) => (
  <div className="product">
    <h2>{name}</h2>
    <p>${price.toFixed(2)}</p>
  </div>
);

// ProductList component
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
{
  "checklist": [
    {
      "task": "Create Product component",
      "done": true
    },
    {
      "task": "Create ProductList component",
      "done": true
    },
    {
      "task": "Pass products array to ProductList component",
      "done": false
    },
    {
      "task": "Ensure unique key for each Product in the list",
      "done": true
    },
    {
      "task": "Style Product and ProductList components",
      "done": false
    },
    {
      "task": "Integrate ProductList component into the application",
      "done": false
    }
  ]
}