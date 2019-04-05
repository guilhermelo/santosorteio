let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let ejs = require('ejs');
let bodyParser = require('body-parser');

let app = express();
let router = express.Router();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

let santoRouter = require('./api/santo/santo.router');
let ministroRouter = require('./api/ministro/ministro.route');


app.use('/', router);
santoRouter(router);
ministroRouter(router);


app.listen(3000, () => {
    console.log('Servidor no ar!');
});







