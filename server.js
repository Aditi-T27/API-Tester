const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
const port = 3000;

app.get('/api/data/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `You requested data with id ${id}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
