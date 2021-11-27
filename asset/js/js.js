document.querySelector("body").style.width = window.innerWidth + "px";
window.addEventListener("load", function(){
    setTimeout( function (){
        document.querySelector(".preloader").style.display = "none";
    }, 500);
    
})

document.querySelector(".modal-form i").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("show-modal");
})
document.querySelector(".newsletter").addEventListener("click", function(){
    document.querySelector(".modal").classList.add("show-modal");
})
document.querySelector(".jeans").addEventListener("click", function(){
    if(document.getElementById("list-of-jeans").style.display == 'none'){
        document.getElementById("list-of-jeans").style.display = 'block';
        document.getElementById("icon").classList.remove('fa-caret-right');
        document.getElementById("icon").classList.add('fa-caret-down');        
    }
    else{
        document.getElementById("list-of-jeans").style.display = 'none';
        document.getElementById("icon").classList.remove('fa-caret-down');
        document.getElementById("icon").classList.add('fa-caret-right');
    }
})
document.querySelector(".nav-bar i").addEventListener("click", function(){
    if(document.querySelector("nav").style.display == "block")
        document.querySelector("nav").style.display = "none";
    else
        document.querySelector("nav").style.display = "block"
})
/*


let colorTheme = document.getElementById("colorTheme");
colorTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        colorTheme.src = "../images/sun/png";
    }
    else{
        colorTheme.src = "../images/moon.png";
    }
})
let listOfJeans= ()=>{
    
}
let popUp = ()=>{
    if(document.getElementsByClassName("pop-up-form")[0].style.display == 'none'){
        //callback(true);
        document.getElementsByClassName("pop-up-form")[0].style.display = 'block';
        
    }
    else{
        document.getElementsByClassName("pop-up-form")[0].style.display = 'none';
        //document.getElementsByClassName("pop-up-form")[0].style.cssText += 'transform: scale(0.1)';
        //callback(false);
        
    }
    
}
let close = ()=>{
    console.log('close');
    
}
function callback(bool){
    if(bool)
        document.getElementsByClassName("pop-up-form")[0].style.cssText += 'transform: scale(1)';
    else
        document.getElementsByClassName("pop-up-form")[0].style.display = 'none';
}*/