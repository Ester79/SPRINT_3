// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];


var total = 0;

// Exercise 1
function buy(id) {
    let unitsCart = document.getElementById("count_product");
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i = 0; i < products.length; i++){
        if(id === products[i].id){
            cartList.push(products[i]);
            unitsCart.innerHTML = cartList.length;
        }
    }
    this.calculateTotal();  
}

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    document.getElementById("count_product").innerHTML = cartList.length;
    this.calculateTotal();
    const tbodyElement = document.getElementById('cart_list');
    tbodyElement.innerHTML = "";
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let finalPrice = 0;
    let totalPrice = document.getElementById("total_price");
    for(let i = 0; i < cartList.length; i++){
        finalPrice += cartList[i].price;
    }
    totalPrice.innerHTML = finalPrice;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        let found = false;
        for (let j = 0; j < cart.length; j++) {
            if (cart[j].id === cartList[i].id) {
                cart[j].quantity += 1;
                cart[j].subtotal = cart[j].quantity * cart[j].price;
                cart[j].subtotalWithDiscount = cart[j].quantity * cart[j].price;
                found = true;
            }
        }
        if (found === false) {
            cart.push(
                {
                    id: cartList[i].id,
                    name: cartList[i].name,
                    type: cartList[i].type,
                    price: cartList[i].price,
                    quantity: 1,
                    subtotal: 1 * cartList[i].price,
                    subtotalWithDiscount: 1 * cartList[i].price,
                }
            )
        }
    }
    this.applyPromotionsCart();
    this.printCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let discount = 0;
    for(let i = 0; i < cart.length; i++){
        for(let j = 0; j < products.length; j++){
            if(cart[i].id === products[j].id){
                if(products[j].hasOwnProperty('offer') === true){
                    if(cart[i].quantity >= products[j].offer.number){
                        discount =  cart[i].subtotal * products[j].offer.percent / 100;
                        cart[i].subtotalWithDiscount = cart[i].subtotal - discount;
                    }
                }
            }
        }
      
    }
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const tbodyElement = document.getElementById('cart_list');
    tbodyElement.innerHTML = "";
    let totalPrice = document.getElementById("total_price");
    for(let i = 0; i < cart.length; i++){
        tbodyElement.innerHTML += `
        <tr>
            <th scope="row">${cart[i].name}</th>
                <td>${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>${cart[i].subtotalWithDiscount}</td>
        </tr>`
        totalPrice += cart[i].subtotalWithDiscount;
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
    this.generateCart();
	// printCart();
    // this.generateCart();
}