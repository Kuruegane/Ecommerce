function sellProduct(event) { 
    

    /*Captura da UL*/
    const infoProduct = document.getElementById("infoProduct");

    /*Inputs*/
    const inputProduct = document.querySelector("[data-input-product]");
    const inputPrice = document.querySelector("[data-input-price]");
    const inputDescription = document.querySelector("[data-input-description]");

    /*Valores dos Inputs*/    
    const valorProduct = inputProduct.value; 
    const valorPrice = inputPrice.value;
    const valorDescription = inputDescription.value;

    /*Conteúdo dos valores*/
    const contentProduct = `<p class="valor">Produto: ${valorProduct}</p>` 
    const contentPrice = `<p class="valor">Preço: ${valorPrice}</p>`
    const contentDescription = `<p class="valor" id="valor">Descrição: ${valorDescription}</p>`

    /*Criação de elementos*/
    var productElement = document.createElement('li');
    productElement.innerHTML = contentProduct;

    var priceElement = document.createElement('li');
    priceElement.innerHTML = contentPrice;
    
    var descriptionElement = document.createElement('li');
    descriptionElement.innerHTML = contentDescription;

    /*Conexão da UL com a LI*/
    infoProduct.appendChild(productElement);
    infoProduct.appendChild(priceElement);
    infoProduct.appendChild(descriptionElement);

    /*Valor para deixar o input vazio após o envio do dados*/
    inputProduct.value = " "
    inputPrice.value = " "
    inputDescription.value = " "
}


