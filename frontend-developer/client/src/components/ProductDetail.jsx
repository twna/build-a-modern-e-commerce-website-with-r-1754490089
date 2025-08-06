import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
{
  "checklist": [
    {
      "item": "Display product image",
      "completed": true
    },
    {
      "item": "Display product name",
      "completed": true
    },
    {
      "item": "Display product price",
      "completed": true
    },
    {
      "item": "Format price to two decimal places",
      "completed": true
    },
    {
      "item": "Display product description",
      "completed": true
    },
    {
      "item": "Include an 'Add to Cart' button",
      "completed": true
    }
  ]
}