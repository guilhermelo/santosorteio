exports.findAll = (req, res) => {
    let santos = [
            {
                nome: "Sagrada Família",
                imagem: "https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2013/12/sagrada-fam%C3%ADlia.jpg",
                portador: "Camila",
                integrantes: [
                    "Guilherme",
                    "Camila Oliveira",
                    "João",
                    "Marcinho"
                ]
            },
            {
                nome: "Nossa Senhora de Fátima",
                imagem: "imagem.jpg",
                portador: "Maria",
                integrantes: [
                    "Camila Oliveira",
                    "Matheus"
                ]
            }
        ];
        res.render('pages/santos', { santos });
}