function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price){
  let cart = getCart();
  let found = cart.find(i => i.name === name);

  if(found){
    found.qty += 1;
  } else {
    cart.push({name, price, qty:1});
  }

  saveCart(cart);
  updateCartCount();
  alert(name + " added");
}

function updateCartCount(){
  let c = getCart().reduce((t,i)=>t+i.qty,0);
  let el = document.getElementById("cartCount");
  if(el) el.innerText = c;
}

function changeQty(i, delta){
  let cart = getCart();
  cart[i].qty += delta;
  if(cart[i].qty <= 0) cart.splice(i,1);
  saveCart(cart);
  loadCart();
  updateCartCount();
}

function clearCart(){
  localStorage.removeItem("cart");
  loadCart();
  updateCartCount();
}
