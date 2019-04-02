exports.findAll = (req, res) => {
    let santos = [
            {
                id: 1,
                nome: "Sagrada Família",
                portador: "Camila",
                ultimoSorteio: '22/01/2019',
                integrantes: [
                    "Guilherme",
                    "Camila Oliveira",
                    "João",
                    "Marcinho"
                ]
            },
            {
                id: 2,
                nome: "Nossa Senhora de Fátima",
                portador: "Maria",
                ultimoSorteio: '29/01/2019',
                integrantes: [
                    "Camila Oliveira",
                    "Matheus"
                ]
            }
        ];
        res.render('pages/santos', { santos });
}