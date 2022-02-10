const express = require('express');
const app = express();
const path = require('path');
const routes = require('./route');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.redirect('/states'));
app.use('/states', routes);
const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        });