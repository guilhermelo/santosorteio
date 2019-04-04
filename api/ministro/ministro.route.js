module.exports = (router) => {
    router.get('/', (req, res) => {
        let ministros = [
            {
                id: 1,
                nome: "Guilherme"
            },
            {
                id: 2,
                nome: "Camila Dutra"
            },
            {
                id: 3,
                nome: "Camila Oliveira"
            }
        ];

        res.render('pages/ministros', { ministros });
    });

    router.post('/', (req, res) => {
        
        let ministro = {
            nome: req.body.nome,
        };

        // grava ministro no banco
    });


    return router;
}