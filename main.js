let navsymbol    = document.getElementById("navsymbol");
let sidenav      = document.getElementById("sidenav");
let closesymbol  = document.getElementById("closesymbol");

navsymbol.addEventListener("click",function(){
  sidenav.style.display = "block"
})

closesymbol.addEventListener("click",function(){
  sidenav.style.display = "none"
})