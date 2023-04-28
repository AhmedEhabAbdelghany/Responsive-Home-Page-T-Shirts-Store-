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
let shopingcartt = document.getElementById("shopingcartt")
let closecart    = document.getElementById("closecart")
cartsymbol.addEventListener("click",function(){
  shopingcartt.style.display = "block"
})

closecart.addEventListener("click",function(){
  shopingcartt.style.display = "none"
})