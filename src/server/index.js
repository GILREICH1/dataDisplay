const express = require('express');

const app = express();

app.get('/api/getSomething', (req, res) => res.send({ sounds: 'good' }));
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));