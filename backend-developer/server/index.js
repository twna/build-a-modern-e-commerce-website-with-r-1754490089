// Step 1: Initialize a new Node.js project
// This is done in the terminal with the following command:
// npm init -y

// Step 2: Install Express
// This is also done in the terminal with the following command:
// npm install express

// Step 3: Create a simple server with Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Step 4: Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
{
  "checklist": [
    {
      "step": "Initialize Node.js project",
      "command": "npm init -y",
      "completed": true
    },
    {
      "step": "Install Express",
      "command": "npm install express",
      "completed": true
    },
    {
      "step": "Create server.js file",
      "description": "Write the server code using Express",
      "completed": true
    },
    {
      "step": "Start the server",
      "command": "node server.js",
      "completed": true
    }
  ]
}