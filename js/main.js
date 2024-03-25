let nav = document.querySelector(".navbar");
let btn = document.querySelector("#menu-btn");
let cartItem = document.querySelector(".cart-item-container");
let cartBtn = document.querySelector("#cart-btn");
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search");

//  F U N C T I O N      C A R T    S H O  P P I N G--------
cartBtn.addEventListener("click", ()=>{
    cartItem.classList.toggle("show")
    nav.classList.remove("active")
    searchForm.classList.remove("add")
})
// F N C T I O N    M E N U    L I S T ---------
btn.addEventListener("click", function () {
    nav.classList.toggle("active")
    searchForm.classList.remove("add")
    cartItem.classList.remove("show")
    
})
// F U N C T I O N   S E A R C H   F O R M -----------
searchBtn.addEventListener("click" , ()=>{
    searchForm.classList.toggle("add")
    nav.classList.remove("active")
    cartItem.classList.remove("show")
})

// F U N C T I O N    S C R O L L    W I N D O W   ------

window.onscroll=()=>{
    nav.classList.remove("active")
    searchForm.classList.remove("add")
    cartItem.classList.remove("show")
}
let scrollUp=document.querySelector(".scroll")
window.addEventListener("scroll" , ()=>{
    if (window.scrollY>600) {
       scrollUp.style.display="flex"
    }else{
        scrollUp.style.display="none"
    }
})
scrollUp.addEventListener("click" , ()=>{
    window.scrollTo({top:0, behavior:"smooth"})
})

// F U N C T I O N    R E S I Z E ------------

window.addEventListener("resize", function (e) {
    let hiddenNav = e.currentTarget.innerWidth;
    if (hiddenNav < 900) {
        nav.classList.remove("active")
        searchForm.classList.remove("add")
        cartItem.classList.remove("show")
    } else {
        nav.classList.remove("active")
        searchForm.classList.remove("add")
        cartItem.classList.remove("show")

    }
})
// E N D          F U N C T I O N              R E S I Z E -------------
// S E T I N T E R V A L              F U N C T I O N ------------
let img=document.querySelector(".home img");
let images=["image/bg.avif","image/bg10.jpg","image/bg3 (2).jpg","image/bg4.jpg"];
let imgIndex=0;
let set=setInterval(()=>{
img.src=images[imgIndex]
imgIndex = (imgIndex + 1) % images.length
},3000)
set()
// E N D      S E T I N T E V A L      F U N C T I O N   ------------

