const express = require('express');
const app = express();
const port = 4111;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})