document.getElementById('filter-button').addEventListener('click', filterProducts);

function filterProducts() {
    const category = document.getElementById('category').value;
    const priceRange = document.getElementById('price-range').value;
    const keyword = document.getElementById('search-keyword').value;

    // AJAX request to load product data
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'products.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            let filteredProducts = products;

            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === category);
            }

            filteredProducts = filteredProducts.filter(product => product.price <= priceRange);

            if (keyword) {
                filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
            }

            displayProducts(filteredProducts);
        }
    };
    xhr.send();
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}
