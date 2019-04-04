let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let ejs = require('ejs');
let bodyParser = require('body-parser');

let app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

let router = express.Router();
let santoRouter = require('./api/santo/santo.router')(router);
let ministroRouter = require('./api/ministro/ministro.route')(router);


app.use('/sorteio', santoRouter);
app.use('/ministros', ministroRouter);


app.listen(3000, () => {
    console.log('Servidor no ar!');
});







