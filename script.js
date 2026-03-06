let cart = {};

/* ADD ITEM */
function addToCart(name, price) {
    if (cart[name]) {
        cart[name].qty++;
    } else {
        cart[name] = { price: price, qty: 1 };
    }
    renderCart();
}

/* INCREASE QTY */
function increase(name) {
    cart[name].qty++;
    renderCart();
}

/* DECREASE QTY */
function decrease(name) {
    cart[name].qty--;
    if (cart[name].qty <= 0) {
        delete cart[name];
    }
    renderCart();
}

/* SHOW CART */
function renderCart() {
    let cartBox = document.getElementById("cart-items");
    let totalBox = document.getElementById("total");

    cartBox.innerHTML = "";
    let total = 0;

    for (let item in cart) {
        let price = cart[item].price;
        let qty = cart[item].qty;
        total += price * qty;

        cartBox.innerHTML += `
        <div class="cart-row">
            <strong>${item}</strong> - ₹${price}
            <button onclick="decrease('${item}')">−</button>
            <span>${qty}</span>
            <button onclick="increase('${item}')">+</button>
        </div>
        `;
    }

    totalBox.innerText = total;
}

/* PLACE ORDER */
function placeOrder() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }
    window.location.href = "confirm.html";
}








