const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/src/index.html');
});

const PORT =  process.env.PORT || 8080;
app.listen(PORT, _ => {
    console.log('App deployed at ', {PORT});
});
