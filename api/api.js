const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(`https://superheroapi.com/api/4231858057039907/${id}`);
  res.json(response.data);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
