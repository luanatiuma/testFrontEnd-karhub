function creatCard (imagem, descricao, valor) {
    return `
    <div class=card>
    <img src="${imagem}" alt="${descricao}">
    <h2>${descricao}</h2>
    <h2>${valor}</h2>
    </div>
    `
}

document.querySelector(`#card`).innerHTML = `
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
${creatCard(`./turbina.png`, `Turbina`, `R$600,00`)}
`
