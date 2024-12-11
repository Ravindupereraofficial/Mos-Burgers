
function filterBurgers(type) {
    const cards = document.querySelectorAll('.burger-cards .card');
    cards.forEach(card => {
        if (type === 'all' || card.classList.contains(type)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


let cart = [];
let customers = [];


function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartTable = document.getElementById("cart").querySelector("tbody");
    cartTable.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        </tr>
    `).join("");
    calculateTotal();
}


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}


function calculateTotal() {
    const discount = parseInt(document.getElementById("discount").value) || 0;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalWithDiscount = total - (total * discount / 100);
    document.getElementById("total-amount").innerText = totalWithDiscount.toFixed(2);
}


function placeOrder() {
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;

    if (!name || !phone || !address) {
        alert("Please fill in all customer details.");
        return;
    }

   
    customers.push({ name, phone, address });
    renderCustomerList();

    
    cart = [];
    document.getElementById("customer-form").reset();
    renderCart();

    
    alert(`Order placed by ${name}!`);
}

// Add new customer
function addCustomer() {
    const name = document.getElementById("new-customer-name").value;
    const phone = document.getElementById("new-customer-phone").value;
    const address = document.getElementById("new-customer-address").value;

    if (!name || !phone || !address) {
        alert("Please fill in all fields.");
        return;
    }

    customers.push({ name, phone, address });
    renderCustomerList();
}

// Render the customer list
function renderCustomerList() {
    const customerTable = document.getElementById("customer-list").querySelector("tbody");
    customerTable.innerHTML = customers.map(customer => `
        <tr>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
        </tr>
    `).join("");
}
