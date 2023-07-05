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
${creatCard(`https://img.freepik.com/fotos-gratis/um-passaro-com-a-palavra-aguia-nas-asas_1340-33393.jpg`, `descrição`, `valor`)}
`