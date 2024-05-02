window.onload = function() {
    fetch('/products')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('product-container');
            products.forEach(product => {
                const prodElement = document.createElement('div');
                prodElement.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
                container.appendChild(prodElement);
            });
        });
};
