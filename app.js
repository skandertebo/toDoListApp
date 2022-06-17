
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const items = [];
const Today = new Date();
const options = { weekday: 'long' };
const date = Today.toLocaleDateString("en-US" , options);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));





app.get('/', (req, res) => {
    res.render('index.ejs',{date:date});
})


app.listen(3000 , function () {
    console.log('listening on port 3000');
})