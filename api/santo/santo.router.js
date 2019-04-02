// chama o controller
let controller = require('./santo.controller');


module.exports = function(router) {

    router.get('/', (req, res) => {
        controller.findAll(req, res);
    });

    router.get('/', (req, res) => {
        let idSanto = req.body.id;

        // busca lista de pessoas que ainda podem ser sorteadas para o santo
        let ministros = [];

        // gerar número aleatoriamente com range de 1 até a quantidade de ministros possíveis
        let ministroPortador = "";//;

        // atualiza o ministro portador e retira o nome do mesmo da lista de possíveis ministros
    });


}