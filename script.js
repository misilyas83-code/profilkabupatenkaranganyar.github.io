// Loading Screen
window.addEventListener("load", () => {
setTimeout(() => {
document.getElementById("loader").style.display = "none";
},1000);
});

// Navbar Scroll
window.addEventListener("scroll", () => {

const navbar = document.getElementById("navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

// Back To Top
const topBtn = document.getElementById("topBtn");

if(window.scrollY > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

// Back To Top
document.getElementById("topBtn").addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});

// Scroll Reveal Animation
function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;
let revealTop = reveals[i].getBoundingClientRect().top;
let revealPoint = 100;

if(revealTop < windowHeight - revealPoint){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);
reveal();