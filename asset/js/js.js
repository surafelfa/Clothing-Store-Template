document.querySelector("html").style.width = screen.availWidth + "px";
let modalFormWidth = (screen.availWidth)* (3/5);
document.querySelector(".modal-form").style.width =  modalFormWidth + "px";
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
    if(document.querySelector("nav").style.display == "none")   
        document.querySelector("nav").style.display = "block";
    else
    document.querySelector("nav").style.display = "none";
})