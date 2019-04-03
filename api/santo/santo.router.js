// chama o controller
let controller = require('./santo.controller');


module.exports = function(router) {

    router.get('/', (req, res) => {
        controller.findAll(req, res);
    });

    router.get('/sorteio/:id', (req, res) => {
        controller.sortition(req, res);
    });
}