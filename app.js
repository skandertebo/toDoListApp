
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

const items = [];
const Today = new Date();
const options = { weekday: 'long' };
const date = Today.toLocaleDateString("en-US" , options);



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));





app.get('/', (req, res) => {
    res.render('index.ejs',{date:date , items:items});
})

app.post('/', (req, res) => {
    items.push(req.body.item);
    res.redirect('/');
})

app.listen(3000 , function () {
    console.log('listening on port 3000');
})
