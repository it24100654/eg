

const express = require('express');
const mongoose = require('mongoose');
const dns = require('node:dns');

dns.setServers(["1.1.1.1", "8.8.8.8"])
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});