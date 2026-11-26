const productList = document.getElementById('productList');
const productForm = document.getElementById('productForm');

// Fetch and display products
async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();

    productList.innerHTML = '';

    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>ID: ${product.id}</p>
                <p>Price: ₹${product.price}</p>
                <p>Rating: ⭐ ${product.rating}</p>
            </div>
        `;
    });
}

// Add new product
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const product = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        rating: document.getElementById('rating').value
    };

    await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    productForm.reset();
    loadProducts();
});

// Load products when page opens
loadProducts();