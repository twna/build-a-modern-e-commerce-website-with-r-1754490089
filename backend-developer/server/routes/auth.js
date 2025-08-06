const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // This should be replaced with a proper database
const secretKey = 'your-secret-key'; // This should be stored securely

// User registration endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword, roles: ['user'] };
    users.push(user);
    res.status(201).send({ message: 'User registered' });
});

// User login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username, roles: user.roles }, secretKey);
        res.status(200).send({ token });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Authentication middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Authorization middleware
const authorize = (roles) => (req, res, next) => {
    if (!req.user || !roles.some(role => req.user.roles.includes(role))) {
        return res.sendStatus(403);
    }
    next();
};

// A protected route example
app.get('/protected', authenticate, authorize(['user']), (req, res) => {
    res.status(200).send({ message: 'You have access to the protected route' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
{
  "checklist": [
    { "task": "Choose authentication method", "done": true },
    { "task": "Implement user registration", "done": true },
    { "task": "Implement user login", "done": true },
    { "task": "Securely store user credentials", "done": true },
    { "task": "Generate authentication tokens", "done": true },
    { "task": "Validate authentication tokens", "done": true },
    { "task": "Implement authentication middleware", "done": true },
    { "task": "Implement authorization middleware", "done": true },
    { "task": "Protect routes with middleware", "done": true },
    { "task": "Assign roles to users", "done": true },
    { "task": "Check roles in authorization", "done": true }
  ]
}