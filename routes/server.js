const express = require('express');

const app = express();

const booksRouter = require('./routes/books');

app.use(express.json());

app.use('/', booksRouter);

app.listen(4000, () => {
console.log('Server is running on port 4000');
});
