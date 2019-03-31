let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let ejs = require('ejs');
let bodyParser = require('body-parser');

let app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded());

let router = express.Router();
let santoRouter = require('./api/santo/santo.router');


app.use('/api', router);
santoRouter(router);

app.listen(3000, () => {
    console.log('Servidor no ar!');
});







