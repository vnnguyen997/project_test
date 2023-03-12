const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Client } = require('pg');

const app = express();
const port = 3001;

// Connect to Postgres database
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'NewDB',
  password: 'PostGres456!',
  port: 5432,
});
client.connect();

// Define user schema
const userSchema = {
  username: { type: 'string', required: true },
  email: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

// Define user model
const UserModel = {
  async create(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const query = {
      text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3)',
      values: [user.username, user.email, hashedPassword],
    };
    try {
      const result = await client.query(query);
      console.log(result);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create user');
    }
  },
};

// Configure middleware
app.use(bodyParser.json());

// Define registration endpoint
app.post('/register', async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Validate user data
    if (!username || !email || !password) {
      throw new Error('Invalid user data');
    }

    // Create new user
    const user = { username, email, password };
    await UserModel.create(user);

    // Return success response
    res.status(200).json({ message: 'User created successfully' });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});