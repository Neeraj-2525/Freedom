let clouds = document.getElementById("clouds");
let mountain = document.getElementById("mountain");
let trees = document.getElementById("trees");
let heroText = document.getElementById("hero-text");
let exploreBtn = document.getElementById("exploreBtn")
let header = document.getElementById("header")
let secHeading = document.getElementById("secHeading")
let secText = document.getElementById("secText")




window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY;
    mountain.style.marginTop = scrollValue*0.25 + "px";
    clouds.style.marginTop = scrollValue*0.45 + "px";
    header.style.marginTop = scrollValue*0.5 + "px";
    forest.style.marginTop = scrollValue*0.35 + "px";
    trees.style.top = scrollValue*0 + "px";
    exploreBtn.style.marginTop = scrollValue + "px";
    heroText.style.marginTop = scrollValue*1.2 + "px";
    secHeading.style.marginTop =  (-scrollValue*0.15) + "px";
    secText.style.marginTop =  (50 - scrollValue*0.08) + "px";
})