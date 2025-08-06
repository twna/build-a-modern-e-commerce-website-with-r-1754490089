from flask import Flask, jsonify, request
from models import Product, db

app = Flask(__name__)

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify(product.to_dict())

@app.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = Product(name=data['name'], description=data['description'], price=data['price'])
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201

@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    product = Product.query.get_or_404(product_id)
    data = request.json
    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.price = data.get('price', product.price)
    db.session.commit()
    return jsonify(product.to_dict())

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({'message': 'Product deleted'}), 204

if __name__ == '__main__':
    app.run(debug=True)
{
  "checklist": [
    {"task": "Set up Flask application", "completed": true},
    {"task": "Define Product model and database setup", "completed": true},
    {"task": "Implement GET endpoint for all products", "completed": true},
    {"task": "Implement GET endpoint for a single product", "completed": true},
    {"task": "Implement POST endpoint to create a new product", "completed": true},
    {"task": "Implement PUT endpoint to update an existing product", "completed": true},
    {"task": "Implement DELETE endpoint to delete a product", "completed": true}
  ]
}