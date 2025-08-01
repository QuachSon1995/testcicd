// index.js
const express = require('express');
const app = express();
const port = 3005; // hoặc bạn có thể chọn cổng khác

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

// Một route khác test thêm
app.get('/test', (req, res) => {
  res.send('This is a test endpoint1!');
});

app.get('/test3', (req, res) => {
  res.send('This is a test endpoint3!');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
