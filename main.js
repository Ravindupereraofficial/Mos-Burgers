// Sample items data
const items = [
    { id: "B1001", name: "Classic Burger (Large)", price: 750, discount: 0, category: "burger", image: "burger1.jpg" },
    { id: "B1002", name: "Classic Burger (Regular)", price: 1500, discount: 15, category: "burger", image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1003", name: "Turkey Burger", price: 1600, discount: 0, category: "burger", image: "burger3.jpg" },
    { id: "B1004", name: "Chicken Burger (Large)", price: 1400, discount: 0, category: "burger", image: "burger4.jpg" },
    { id: "B1005", name: "Chicken Burger (Regular)", price: 800, discount: 20, category: "burger", image: "burger5.jpg" },
    { id: "B1006", name: "Cheese Burger (Large)", price: 1000, discount: 0, category: "burger", image: "burger6.jpg" },
    { id: "B1007", name: "Cheese Burger (Regular)", price: 600, discount: 0, category: "burger", image: "burger7.jpg" },
    { id: "B1008", name: "Bacon Burger", price: 650, discount: 15, category: "burger", image: "burger8.jpg" },
    { id: "B1009", name: "Shawarma Burger", price: 800, discount: 0, category: "burger", image: "burger9.jpg" },
    { id: "B1010", name: "Olive Burger", price: 1800, discount: 0, category: "burger", image: "burger10.jpg" },
    { id: "B1012", name: "Double-Cheese Burger", price: 1250, discount: 20, category: "burger", image: "burger11.jpg" },
    { id: "B1013", name: "Crispy Chicken Burger (Regular)", price: 1200, discount: 0, category: "burger", image: "burger12.jpg" },
    { id: "B1014", name: "Crispy Chicken Burger (Large)", price: 1600, discount: 10, category: "burger", image: "burger13.jpg" },
    { id: "B1015", name: "Paneer Burger", price: 900, discount: 0, category: "burger", image: "burger14.jpg" },
    { id: "B1016", name: "Crispy Chicken Submarine (Large)", price: 2000, discount: 0, category: "submarine", image: "submarine1.jpg" },
    { id: "B1017", name: "Crispy Chicken Submarine (Regular)", price: 1500, discount: 0, category: "submarine", image: "submarine2.jpg" },
    { id: "B1018", name: "Chicken Submarine (Large)", price: 1800, discount: 3, category: "submarine", image: "submarine3.jpg" },
    { id: "B1019", name: "Chicken Submarine (Regular)", price: 1400, discount: 0, category: "submarine", image: "submarine4.jpg" },
    { id: "B1020", name: "Grinder Submarine", price: 2300, discount: 0, category: "submarine", image: "submarine5.jpg" },
    { id: "B1021", name: "Cheese Submarine", price: 2200, discount: 0, category: "submarine", image: "submarine6.jpg" },
    { id: "B1022", name: "Double Cheese n Chicken Submarine", price: 1900, discount: 16, category: "submarine", image: "submarine7.jpg" },
    { id: "B1023", name: "Special Horgie Submarine", price: 2800, discount: 0, category: "submarine", image: "submarine8.jpg" },
    { id: "B1024", name: "MOS Special Submarine", price: 3000, discount: 0, category: "submarine", image: "submarine9.jpg" },
    { id: "B1025", name: "Steak Fries (Large)", price: 1200, discount: 0, category: "fries", image: "fries1.jpg" },
    { id: "B1026", name: "Steak Fries (Medium)", price: 600, discount: 0, category: "fries", image: "fries2.jpg" },
    { id: "B1027", name: "French Fries (Large)", price: 800, discount: 0, category: "fries", image: "fries3.jpg" },
    { id: "B1028", name: "French Fries (Medium)", price: 650, discount: 0, category: "fries", image: "fries4.jpg" },
    { id: "B1029", name: "French Fries (Small)", price: 450, discount: 0, category: "fries", image: "fries5.jpg" },
    { id: "B1030", name: "Sweet Potato Fries (Large)", price: 600, discount: 0, category: "fries", image: "fries6.jpg" },
    { id: "B1031", name: "Chicken n Cheese Pasta", price: 1600, discount: 15, category: "pasta", image: "pasta1.jpg" },
    { id: "B1032", name: "Chicken Penne Pasta", price: 1700, discount: 0, category: "pasta", image: "pasta2.jpg" },
    { id: "B1033", name: "Ground Turkey Pasta Bake", price: 2900, discount: 10, category: "pasta", image: "pasta3.jpg" },
    { id: "B1034", name: "Creamy Shrimp Pasta", price: 2000, discount: 0, category: "pasta", image: "pasta4.jpg" },
    { id: "B1035", name: "Lemon Butter Pasta", price: 1950, discount: 0, category: "pasta", image: "pasta5.jpg" },
    { id: "B1036", name: "Tagliatelle Pasta", price: 2400, discount: 1, category: "pasta", image: "pasta6.jpg" },
    { id: "B1037", name: "Baked Ravioli", price: 2000, discount: 1, category: "pasta", image: "pasta7.jpg" },
    { id: "B1038", name: "Fried Chicken (Small)", price: 1200, discount: 0, category: "chicken", image: "chicken1.jpg" },
    { id: "B1039", name: "Fried Chicken (Regular)", price: 2300, discount: 10, category: "chicken", image: "chicken2.jpg" },
    { id: "B1040", name: "Fried Chicken (Large)", price: 3100, discount: 5, category: "chicken", image: "chicken3.jpg" },
    { id: "B1041", name: "Hot Wings (Large)", price: 2400, discount: 0, category: "chicken", image: "chicken4.jpg" },
    { id: "B1042", name: "Devilled Chicken (Large)", price: 900, discount: 0, category: "chicken", image: "chicken5.jpg" },
    { id: "B1043", name: "Devilled Chicken (Regular)", price: 600, discount: 0, category: "chicken", image: "chicken6.jpg" },
    { id: "B1044", name: "Buffalo Wings (Regular)", price: 1500, discount: 0, category: "chicken", image: "chicken7.jpg" },
    { id: "B1045", name: "Buffalo Wings (Large)", price: 2800, discount: 0, category: "chicken", image: "chicken8.jpg" },
    { id: "B1046", name: "Crispy Fried Chicken", price: 1800, discount: 15, category: "chicken", image: "chicken9.jpg" },
    { id: "B1047", name: "Crispy Fried Chicken (Large)", price: 3000, discount: 10, category: "chicken", image: "chicken10.jpg" },
    { id: "B1048", name: "Cold Beverages", price: 350, discount: 0, category: "beverages", image: "beverage1.jpg" },
    { id: "B1049", name: "Hot Beverages", price: 400, discount: 0, category: "beverages", image: "beverage2.jpg" },
    { id: "B1050", name: "Juices", price: 500, discount: 0, category: "beverages", image: "beverage3.jpg" },
    { id: "B1051", name: "Soft Drinks", price: 200, discount: 0, category: "beverages", image: "beverage4.jpg" }
];




const cart = [];
const orderHistory = [];

// Function to display products
function displayProducts(category) {
    const productRow = document.getElementById(`${category}-row`);
    const filteredItems = items.filter(item => item.category === category);

    filteredItems.forEach(item => {
        productRow.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>LKR ${item.price}</p>
                <button onclick="addToCart('${item.id}', '${item.name}', ${item.price})">Add to Cart</button>
            </div>
        `;
    });
}

// Function to add an item to the cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `<li>No items in the cart.</li>`;
    } else {
        cart.forEach(item => {
            cartItems.innerHTML += `
                <li>
                    ${item.name} - ${item.quantity} x LKR ${item.price}
                    <button onclick="removeFromCart('${item.id}')">Remove</button>
                </li>
            `;
        });
    }
}

// Function to remove an item from the cart
function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    displayCart();
}

// Function to place an order
function placeOrder() {
    const customerName = document.getElementById("customer-name").value;
    const customerContact = document.getElementById("customer-contact").value;
    const customerAddress = document.getElementById("customer-address").value;

    if (!customerName || !customerContact || !customerAddress) {
        alert("Please fill in all customer details.");
        return;
    }

    if (cart.length > 0) {
        const order = {
            customer: { name: customerName, contact: customerContact, address: customerAddress },
            items: [...cart],
        };
        orderHistory.push(order);
        cart.length = 0; // Clear the cart
        displayCart();
        displayOrderHistory();
        document.getElementById("customer-form").reset(); // Reset customer form
        alert("Order placed successfully!");
    } else {
        alert("Cart is empty.");
    }
}

// Function to display order history
function displayOrderHistory() {
    const orderHistoryList = document.getElementById("order-history");
    orderHistoryList.innerHTML = "";

    if (orderHistory.length === 0) {
        orderHistoryList.innerHTML = `<li>No orders yet.</li>`;
    } else {
        orderHistory.forEach((order, index) => {
            const customerInfo = `
                <strong>Customer:</strong> ${order.customer.name}, 
                <strong>Contact:</strong> ${order.customer.contact}, 
                <strong>Address:</strong> ${order.customer.address}
            `;
            const orderItems = order.items
                .map(item => `${item.name} (${item.quantity})`)
                .join(", ");
            orderHistoryList.innerHTML += `
                <li>
                    <strong>Order #${index + 1}:</strong><br>
                    ${customerInfo}<br>
                    <strong>Items:</strong> ${orderItems}
                </li>
            `;
        });
    }
}

// Initialize products
["burger", "submarine", "fries", "pasta", "chicken", "beverages"].forEach(displayProducts);
