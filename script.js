// Daftar produk dengan gambar 
const products = [
    { id: 1, name: 'ROTI', price: 2000, img: 'rotii.jpg'},
    { id: 2, name: 'ES TEH', price: 3000, img: 'es teh.jpg'},
    { id: 3, name: 'SUSU', price: 3000, img: 'susu.jpg'},
    { id: 4, name: 'MIE', price: 5000, img: 'mie.jpg'},
    { id: 5, name: 'GERRY', price: 2000, img: 'gerry.jpg.jpg'},
    { id: 6, name: 'PERMEN', price: 2000, img: 'permen.jpg'},


];

// Keranjang belanja
let cart = [];

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rp ${product.price}</p>
        <button onclick="addToCart(${product.id})">Tambah ke keranjang</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

//Fungsi untuk menambah produk ke keranjang belanja
function addToCart(productId) {
    const product = product.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Fungsi untuk menampilkan isi keranjang belanja
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem = `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

// Fungsi unutk melakukan checkout
function checkout() {
    if (cart.legth === 0) {
        alert('keranjang Anda kosong.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const payment = prompt(`Total belanja anda Rp ${total}. Masukan jumlah pembayaran:`);

    if (payment >= total) {
        alert(`Pembayaran berhasil Kembalian Anda: Rp ${payment - total}`);
        cart = [];
        updateCart();
    } else {
        alert('Uang Anda tidak mencukupi.');
    }
}

// Event listener unutk tombol checkout
document.getElementById('checkout-btn').addEventListener('click', checkout);

// Tampilan produk saat halam dimulai
displayProducts();
