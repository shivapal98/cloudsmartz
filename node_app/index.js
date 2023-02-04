const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my custom homepage!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});