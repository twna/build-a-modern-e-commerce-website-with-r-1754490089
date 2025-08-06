const express = require('express');
const router = express.Router();

// Mock database for demonstration purposes
let orders = [
    // Example order
    { id: 1, customerName: 'John Doe', items: ['Item 1', 'Item 2'], status: 'pending' }
];

// Create a new order
router.post('/orders', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        customerName: req.body.customerName,
        items: req.body.items,
        status: 'pending'
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Retrieve an existing order by ID
router.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found.');
    res.json(order);
});

// List all orders
router.get('/orders', (req, res) => {
    res.json(orders);
});

// Update an existing order
router.put('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found.');

    order.customerName = req.body.customerName || order.customerName;
    order.items = req.body.items || order.items;
    order.status = req.body.status || order.status;
    res.json(order);
});

// Delete an order
router.delete('/orders/:id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (orderIndex === -1) return res.status(404).send('Order not found.');

    const deletedOrder = orders.splice(orderIndex, 1);
    res.status(204).send();
});

module.exports = router;
const express = require('express');
const ordersRouter = require('./path-to-orders-router');

const app = express();
app.use(express.json());
app.use('/api', ordersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
{
  "checklist": [
    {"task": "Create a new order", "endpoint": "POST /api/orders"},
    {"task": "Retrieve an existing order by ID", "endpoint": "GET /api/orders/:id"},
    {"task": "List all orders", "endpoint": "GET /api/orders"},
    {"task": "Update an existing order", "endpoint": "PUT /api/orders/:id"},
    {"task": "Delete an order", "endpoint": "DELETE /api/orders/:id"}
  ]
}