const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.listen(8000, () => console.log('server runnig at port http://127.0.0.1:8000'));
