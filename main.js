// Side Nav
let navsymbol        = document.getElementById("navsymbol");
let sidenav          = document.getElementById("sidenav");
let closesymbol      = document.getElementById("closesymbol");

navsymbol.addEventListener("click",function(){
  sidenav.style.display = "block"
  document.body.style.overflow = "hidden";

})

closesymbol.addEventListener("click",function(){
  sidenav.style.display = "none"
  document.body.style.overflow = "scroll";
})


// Cart
let cartsymbol   = document.getElementById("cartsymbol")
let shoppingcart = document.getElementById("shoppingcart")
let closecart    = document.getElementById("closecart")
cartsymbol.addEventListener("click",function(){
  shoppingcart.style.display = "block"
  document.body.style.overflow = "hidden";

})

closecart.addEventListener("click",function(){
  shoppingcart.style.display = "none"
  document.body.style.overflow = "scroll";

})


