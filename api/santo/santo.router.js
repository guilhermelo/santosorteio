// chama o controller


module.exports = function(router) {

    router.get('/santos', (req, res) => {
        res.json({
            message: 'Mensagem de teste'
        })
    });
}