const celulares = [{
    fotoLink: "https://i.zst.com.br/thumbs/12/13/3e/-733839784.jpg",
    modelo: "Redmi note 10",
    fabricante: "Xiaomi",
    preco: "R$ 1500,00",
    processador: "Qualcom snapdragon",
    memoriaInterna: "6GB",
    memoriaRam: "128GB"
},
{
    fotoLink: "https://i.zst.com.br/thumbs/49/13/35/-555742438.jpg",
    modelo: "Redmi note 10",
    fabricante: "Xiaomi",
    preco: "R$ 1500,00",
    processador: "Qualcom snapdragon",
    memoriaInterna: "6GB",
    memoriaRam: "128GB"
}]

const div = document.querySelector(".container")

celulares.forEach(cel => renderizaNaTela(cel))

function renderizaNaTela(celular) {
    const {
        fotoLink,
        modelo,
        fabricante,
        preco,
        processador,
        memoriaInterna,
        memoriaRam
    } = celular
    const html = `
        <div class="card cards" style="width: 18rem;">
            <img src=${fotoLink} class=" img-tam" alt="...">
            <div class="card-body">
                <h5 class="card-title">${modelo}</h5>
                <p class="card-text">fabricante: ${fabricante}</p>
                <p class="card-text">preço: ${preco}</p>
                <p class="card-text">processador: ${processador}</p>
                <p class="card-text">memoria interna: ${memoriaInterna}</p>
                <p class="card-text">memoria ram: ${memoriaRam}</p>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Opções
                    </button>
                    <ul class="dropdown-menu">
                    <li><button class="btn-edit" data-bs-toggle="modal" data-bs-target="#modalForm">
                    Editar
                </button></li>
                    <li><button class="btn-del" data-bs-toggle="modal" data-bs-target="#delete">
                    Excluir
                </button></li>
                    </ul>
                </div>
            </div>
        </div>
    `
    div.innerHTML += html
}