// Example script to handle product details
document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');

    const products = {
        1: {
            name: "Product 1",
            price: "$10.00",
            description: "This is a detailed description of Product 1.",
            image: "images/product1.jpg"
        },
        2: {
            name: "Product 2",
            price: "$15.00",
            description: "This is a detailed description of Product 2.",
            image: "images/product2.jpg"
        }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
    }
});
