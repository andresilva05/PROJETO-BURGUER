// Seleciona a lista <ul> no HTML
const list = document.querySelector("ul");

// Seleciona o botão com a classe 'show-all' no HTML
const buttonShowAll = document.querySelector(".show-all");

// Seleciona o botão com a classe 'discont' no HTML
const buttonDiscont = document.querySelector(".discont");

// Seleciona o botão com a classe 'sum-products' no HTML
const buttonSumProducts = document.querySelector(".sum-products");

const buttonFilterProducts = document.querySelector(".filter-products");

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
    return newValue;
}

// Função para exibir todos os itens da lista quando o botão é clicado
function showAll(products) {
    let myLi = ""; // Inicializa uma string vazia para armazenar os itens da lista

    // Itera sobre cada produto em products
    products.forEach((product) => {
        // Cria uma string HTML para cada produto e adiciona à variável myLi
        myLi += `
<li style="color: white;">
<img src=${product.src}>
<p>${product.name}</p>
<p class="item-price">${formatCurrency(product.price)}</p>
</li>
`;
    });

    // Define o conteúdo HTML da lista como a string myLi, exibindo todos os produtos
    list.innerHTML = myLi;
}
function showAll2() {
    showAll(menuOptions);
}

// Função para aplicar desconto de 10% nos preços dos produtos
function applyDiscount() {
    const newArray = menuOptions.map(promo => {

        const newMenu = {
            ...promo,
            price: promo.price - promo.price * 10/100,
        }

        return newMenu
    })
            showAll(newArray)
}


// Função para somar o preço total de todos os produtos
function sumProducts() {
    // Usa o método reduce para somar todos os preços dos produtos em menuOptions
    const totalPrice = menuOptions.reduce((accumulator, product) => {
        return accumulator + product.price; // Soma o preço do produto ao acumulador
    }, 0); // Inicializa o acumulador com 0

    // Exibe o preço total na lista
    list.innerHTML = `<li>
<p style="color: white;">
O valor total dos produtos é: ${formatCurrency(totalPrice)}
</p>
</li>`;
}

// Função para filtrar produtos veganos
function filterProducts() {
    const newArray2 = [...menuOptions];
    // Filtra os produtos que têm a propriedade vegano definida como true
    const veganProducts = newArray2.filter((product) => product.vegan);

    showAll(veganProducts);
}

// Adiciona um ouvinte de evento de clique ao botão "Exibir Todos", para chamar a função showAll quando clicado
buttonShowAll.addEventListener("click", showAll2);

// Adiciona um ouvinte de evento de clique ao botão "Aplicar Desconto", para chamar a função applyDiscount quando clicado
buttonDiscont.addEventListener("click", applyDiscount);

// Adiciona um ouvinte de evento de clique ao botão "Somar Produtos", para chamar a função sumProducts quando clicado
buttonSumProducts.addEventListener("click", sumProducts);

// Adiciona um ouvinte de evento de clique ao botão "Filtrar Produtos", para chamar a função filterProducts quando clicado
buttonFilterProducts.addEventListener("click", filterProducts);