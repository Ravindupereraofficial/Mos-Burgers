const items = [
    { id: "B1001", name: "Classic Burger (Large)", price: 750, discount: 0, category: "burger", image: "https://images.pexels.com/photos/5554607/pexels-photo-5554607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1002", name: "Classic Burger (Regular)", price: 1500, discount: 15, category: "burger", image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1003", name: "Turkey Burger", price: 1600, discount: 0, category: "burger", image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1004", name: "Chicken Burger (Large)", price: 1400, discount: 0, category: "burger", image: "https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-cheeseburger-with-french-fries-and-three-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1005", name: "Chicken Burger (Regular)", price: 800, discount: 20, category: "burger", image: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1006", name: "Cheese Burger (Large)", price: 1000, discount: 0, category: "burger", image: "https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1007", name: "Cheese Burger (Regular)", price: 600, discount: 0, category: "burger", image: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1008", name: "Bacon Burger", price: 650, discount: 15, category: "burger", image: "https://images.pexels.com/photos/15146310/pexels-photo-15146310/free-photo-of-burgere-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1009", name: "Shawarma Burger", price: 800, discount: 0, category: "burger", image: "https://images.pexels.com/photos/18188571/pexels-photo-18188571/free-photo-of-burger-and-a-shawarma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1010", name: "Olive Burger", price: 1800, discount: 0, category: "burger", image: "https://images.pexels.com/photos/11401287/pexels-photo-11401287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1012", name: "Double-Cheese Burger", price: 1250, discount: 20, category: "burger", image: "https://images.pexels.com/photos/10922927/pexels-photo-10922927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1013", name: "Crispy Chicken Burger (Regular)", price: 1200, discount: 0, category: "burger", image: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1014", name: "Crispy Chicken Burger (Large)", price: 1600, discount: 10, category: "burger", image: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1015", name: "Paneer Burger", price: 900, discount: 0, category: "burger", image: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1016", name: "Crispy Chicken Submarine (Large)", price: 2000, discount: 0, category: "submarine", image: "https://images.pexels.com/photos/7595072/pexels-photo-7595072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1017", name: "Crispy Chicken Submarine (Regular)", price: 1500, discount: 0, category: "submarine", image: "https://images.pexels.com/photos/7595073/pexels-photo-7595073.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "B1018", name: "Chicken Submarine (Large)", price: 1800, discount: 3, category: "submarine", image: "https://media.istockphoto.com/id/2149693429/photo/sandwich-one-fresh-big-submarine-sandwich-with-ham-cheese-lettuce-tomatoes-and-microgreens-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=itGnQ8ll2i7tS0Alef39zqyd1krP72RdtIqcONPm-QU=" },
    { id: "B1019", name: "Chicken Submarine (Regular)", price: 1400, discount: 0, category: "submarine", image: "https://media.istockphoto.com/id/157718121/photo/foot-long-ham-and-swiss-cheese-sub.webp?a=1&b=1&s=612x612&w=0&k=20&c=3HuT3jrMfztas9I4e7T1wS7n-iIaPdapn3I9A5ZoT_g=" },
    { id: "B1020", name: "Grinder Submarine", price: 2300, discount: 0, category: "submarine", image: "https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501__FillWzExNzAsNTgzXQ.jpg" },
    { id: "B1021", name: "Cheese Submarine", price: 2200, discount: 0, category: "submarine", image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "B1022", name: "Double Cheese n Chicken Submarine", price: 1900, discount: 16, category: "submarine", image: "https://www.foodrepublic.com/img/gallery/tiktoks-viral-grinder-sandwich-is-basically-a-better-salad/intro-1694677635.jpg" },
    { id: "B1023", name: "Special Horgie Submarine", price: 2800, discount: 0, category: "submarine", image: "https://i.shgcdn.com/2bbb0953-8b9f-4a81-b717-1d7cb1644e55/-/format/auto/-/preview/3000x3000/-/quality/lighter/" },
    { id: "B1024", name: "MOS Special Submarine", price: 3000, discount: 0, category: "submarine", image: "https://images.pexels.com/photos/20867465/pexels-photo-20867465/free-photo-of-sandwich-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "B1025", name: "Steak Fries (Large)", price: 1200, discount: 0, category: "fries", image: "https://www.paintthekitchenred.com/wp-content/uploads/2022/03/Air-fryer-frozen-steak-fries-L1-Paint-the-Kitchen-Red-scaled.jpg" },
    { id: "B1026", name: "Steak Fries (Medium)", price: 600, discount: 0, category: "fries", image: "https://www.pinkwhen.com/wp-content/uploads/2023/05/Red-Robin-Frozen-Steak-Fries-in-Air-Fryer-1-500x375.jpg" },
    { id: "B1027", name: "French Fries (Large)", price: 800, discount: 0, category: "fries", image: "https://recipes.net/wp-content/uploads/2023/05/johnnys-bacon-cheese-fries-recipe_8536f8fd0bcf26e94e04352e8d2b48ba.jpeg" },
    { id: "B1028", name: "French Fries (Medium)", price: 650, discount: 0, category: "fries", image: "https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg" },
    { id: "B1029", name: "French Fries (Small)", price: 450, discount: 0, category: "fries", image: "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/air-fryer-potato-fries-featured.jpg" },
    { id: "B1030", name: "Sweet Potato Fries (Large)", price: 600, discount: 0, category: "fries", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Baked-Sweet-Potato-Fries-Recipe.jpg" },
    { id: "B1031", name: "Chicken n Cheese Pasta", price: 1600, discount: 15, category: "pasta", image: "https://saltedmint.com/wp-content/uploads/2018/05/Creamy-tuscan-tomato-pasta-2.jpg" },
    { id: "B1032", name: "Chicken Penne Pasta", price: 1700, discount: 0, category: "pasta", image: "https://www.vincenzosplate.com/wp-content/uploads/2021/08/610x350-Photo-4_862-How-to-Make-CHICKEN-PASTA-Like-an-Italian-V1.jpg" },
    { id: "B1033", name: "Ground Turkey Pasta Bake", price: 2900, discount: 10, category: "pasta", image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg" },
    { id: "B1034", name: "Creamy Shrimp Pasta", price: 2000, discount: 0, category: "pasta", image: "https://www.sipandfeast.com/wp-content/uploads/2023/01/spicy-creamy-mushroom-pasta-snippet.jpg" },
    { id: "B1035", name: "Lemon Butter Pasta", price: 1950, discount: 0, category: "pasta", image: "https://shortgirltallorder.com/wp-content/uploads/2021/07/lemon-butter-pasta-square.jpg" },
    { id: "B1036", name: "Tagliatelle Pasta", price: 2400, discount: 1, category: "pasta", image: "https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749" },
    { id: "B1037", name: "Baked Ravioli", price: 2000, discount: 1, category: "pasta", image: "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2022/06/pasta-primavera-1.jpg" },
    { id: "B1038", name: "Fried Chicken (Small)", price: 1200, discount: 0, category: "chicken", image: "https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" },
    { id: "B1039", name: "Fried Chicken (Regular)", price: 2300, discount: 10, category: "chicken", image: "https://www.therusticelk.com/wp-content/uploads/2018/09/Southern-fried-chicken-2.jpg" },
    { id: "B1040", name: "Fried Chicken (Large)", price: 3100, discount: 5, category: "chicken", image: "https://airfryermom.com/wp-content/uploads/2022/05/Cook-Fried-Chicken-in-Air-Fryer.jpg" },
    { id: "B1041", name: "Hot Wings (Large)", price: 2400, discount: 0, category: "chicken", image: "https://www.browneyedbaker.com/wp-content/uploads/2020/12/buttermilk-fried-chicken-12-square.jpg" },
    { id: "B1042", name: "Devilled Chicken (Large)", price: 900, discount: 0, category: "chicken", image: "https://foodserviceindia.com/wp-content/uploads/2023/07/Frame-65.jpg" },
    { id: "B1043", name: "Devilled Chicken (Regular)", price: 600, discount: 0, category: "chicken", image: "https://poshjournal.com/wp-content/uploads/2021/02/thai-bbq-chicken-wings-8.jpg" },
    { id: "B1044", name: "pepsi", price: 350, discount: 0, category: "beverages", image: "https://www.ocado.com/productImages/612/612029011_1_640x640.jpg?identifier=03aff14ac20f6f9db3749cf29dd865b7" },
    { id: "B1045", name: "Coca Cola", price: 400, discount: 0, category: "beverages", image: "https://i.pinimg.com/originals/99/af/9c/99af9cd03aaf6a856fdfea9d27802f24.jpg" },
    { id: "B1046", name: "Sprite", price: 500, discount: 0, category: "beverages", image: "https://i.pinimg.com/736x/da/29/54/da29549b7fd367669b7d8502d9d0028c.jpg" },
    { id: "B1047", name: "Mirinda", price: 200, discount: 0, category: "beverages", image: "https://i.pinimg.com/736x/99/0b/46/990b466538fbdc1f4b6722a6a393e908.jpg" }
];



  
  let cart = [];
  let orders = [];
  let addedItems = [];
  
  function displayItems(filter = "all") {
    const container = document.getElementById("items-container");
    container.innerHTML = "";
    const filtered = items.filter(item => filter === "all" || item.category === filter);
    filtered.forEach(item => {
      container.innerHTML += `
        <div class="item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Rs. ${item.price}</p>
          <button onclick="addToCart('${item.id}')">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function searchItems() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    displayItems("all");
    const itemsDiv = document.querySelectorAll(".item h3");
    itemsDiv.forEach(item => {
      if (!item.textContent.toLowerCase().includes(query)) {
        item.parentElement.style.display = "none";
      }
    });
  }
  
  function addToCart(id) {
    const item = items.find(i => i.id === id);
    cart.push(item);
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById("cart-list");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemCounts = {};
  
    cart.forEach(item => {
      itemCounts[item.id] = (itemCounts[item.id] || 0) + 1;
    });
  
    cartList.innerHTML = Object.keys(itemCounts).map(itemId => {
      const item = items.find(i => i.id === itemId);
      const quantity = itemCounts[itemId];
      return `
        <tr>
          <td>${item.name}</td>
          <td>Rs. ${item.price}</td>
          <td>${quantity}</td>
          <td>Rs. ${item.price * quantity}</td>
        </tr>
      `;
    }).join("");
  
    document.getElementById("total").textContent = total;
  }
  
  function checkout() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const total = document.getElementById("total").textContent;
  
    if (!name || !contact) {
      alert("Please fill in customer details.");
      return;
    }
  
    // Save order to orders array
    const orderId = Date.now();
    const orderDetails = {
      orderId,
      customerName: name,
      contact: contact,
      items: cart.map(item => item.name).join(", "), // Join items names as a comma-separated list
      total
    };
  
    orders.push(orderDetails);
  
    // Add new order to the orders table
    const ordersTableBody = document.querySelector("#orders-table tbody");
    ordersTableBody.innerHTML += `
      <tr>
        <td>${orderId}</td>
        <td>${name}</td>
        <td>${contact}</td>
        <td>${orderDetails.items}</td>
        <td>${total}</td>
      </tr>
    `;
  
    // Clear the cart after checkout
    cart = [];
    updateCart();
    
    // Clear customer details
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    alert("Order placed successfully!");
  }
  
  function addNewItem(event) {
    event.preventDefault();
    const name = document.getElementById("item-name").value;
    const price = parseInt(document.getElementById("item-price").value);
    const image = document.getElementById("item-image").value;
    const id = `NEW${Date.now()}`;
  
    if (name && price && image) {
      items.push({ id, name, price, category: "all", image });
      displayItems();
      alert("New item added!");
      document.getElementById("add-item-form").reset();
    } else {
      alert("Please fill all fields.");
    }

    

  }

  
  
  document.getElementById("add-item-form").addEventListener("submit", addNewItem);
  document.getElementById("checkout").onclick = checkout;
  displayItems();
  