exports.findAll = (req, res) => {
    let santos = [
        {
            id: 1,
            nome: "Sagrada Família",
            imagem: "https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2013/12/sagrada-fam%C3%ADlia.jpg",
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
            imagem: "https://mediablogs.arautos.org/fatima/files/2010/04/N-Sra-de-Fatima_1.jpg",
            portador: "Maria",
            ultimoSorteio: '29/01/2019',
            integrantes: [
                "Camila Oliveira",
                "Matheus"
            ]
        }
    ];
    res.render('pages/santos', { santos });
};

exports.sortition = (req, res) => {
    let idSanto = req.params.id ? Number.parseInt(req.params.id) : 0;

    let santos = [
        {
            id: 1,
            nome: "Sagrada Família",
            imagem: "https://img.cancaonova.com/cnimages/canais/uploads/sites/2/2013/12/sagrada-fam%C3%ADlia.jpg",
            portador: "Camila",
            ultimoSorteio: '22/01/2019',
            integrantes: [
                "Guilherme",
                "Camila Oliveira",
                "João",
                "Marcinho",
                "Camila Dutra",
                "Maria",
                "Matheus",
                "Amanda",
                "Ana Amália",
                "Mariana"
            ]
        },
        {
            id: 2,
            nome: "Nossa Senhora de Fátima",
            imagem: "https://mediablogs.arautos.org/fatima/files/2010/04/N-Sra-de-Fatima_1.jpg",
            portador: "Maria",
            ultimoSorteio: '29/01/2019',
            integrantes: [
                "Guilherme",
                "Camila Oliveira",
                "João",
                "Marcinho",
                "Camila Dutra",
                "Maria",
                "Matheus",
                "Amanda",
                "Ana Amália",
                "Mariana"
            ]
        }
    ];
    
    // busca lista de pessoas que ainda podem ser sorteadas para o santo
    let santo = santos.find(santo => santo.id === idSanto);
    
    // gerar número aleatoriamente com range de 1 até a quantidade de ministros possíveis
    let maximo = santo.integrantes.length;
    let sorteado = Math.floor(Math.random() * maximo + 1);

    santo.portador = santo.integrantes[sorteado - 1];

    // remove integrante
    santo.integrantes.splice(sorteado - 1);

    // atualiza o ministro portador e retira o nome do mesmo da lista de possíveis ministros

    res.render('pages/sorteado', { santo });  
};

