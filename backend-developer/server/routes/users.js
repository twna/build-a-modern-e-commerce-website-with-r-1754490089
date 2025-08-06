from flask import Flask, jsonify, request

app = Flask(__name__)

# Mock database as a list of dictionaries
users_db = [
    {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'},
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users_db)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in users_db if user['id'] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        'id': len(users_db) + 1,
        'name': data['name'],
        'email': data['email']
    }
    users_db.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((user for user in users_db if user['id'] == user_id), None)
    if user:
        data = request.get_json()
        user['name'] = data.get('name', user['name'])
        user['email'] = data.get('email', user['email'])
        return jsonify(user)
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users_db
    users_db = [user for user in users_db if user['id'] != user_id]
    return jsonify({'message': 'User deleted'}), 200

if __name__ == '__main__':
    app.run(debug=True)
{
  "checklist": [
    {"task": "Implement GET /users endpoint", "status": "complete"},
    {"task": "Implement GET /users/:id endpoint", "status": "complete"},
    {"task": "Implement POST /users endpoint", "status": "complete"},
    {"task": "Implement PUT /users/:id endpoint", "status": "complete"},
    {"task": "Implement DELETE /users/:id endpoint", "status": "complete"}
  ]
}