// Side Nav
let navsymbol        = document.getElementById("navsymbol");
let sidenav          = document.getElementById("sidenav");
let closesymbol      = document.getElementById("closesymbol");

navsymbol.addEventListener("click",function(){
  sidenav.style.display = "block"
})

closesymbol.addEventListener("click",function(){
  sidenav.style.display = "none"
})


// Cart
let cartsymbol   = document.getElementById("cartsymbol")
let shoppingcart = document.getElementById("shoppingcart")
let closecart    = document.getElementById("closecart")
cartsymbol.addEventListener("click",function(){
  shoppingcart.style.display = "block"
})

closecart.addEventListener("click",function(){
  shoppingcart.style.display = "none"
})


