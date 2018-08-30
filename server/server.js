const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => console.log(`server runnig at port http://127.0.0.1:${PORT}`));
