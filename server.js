const PORT = process.env.PORT || 3001;

const express = require('express');

const fs = require('fs');
const path = require('path');

const api = require('./routes/index.js');

const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.listen(PORT, () => 
    console.log(`API listening now on port http://localhost:${PORT} !`)
);