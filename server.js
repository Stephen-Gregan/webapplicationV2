const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to Database
connectDB();

// Our DB Configuration
 //require('./config/db');
 app.use(cors());
// Enable JSON (body) access
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ mes: 'Welcome to the Stephens API' })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// process.env.PORT ||
const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

