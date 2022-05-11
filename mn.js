// tog sec

    //open
    function opo() {
        var x = document.getElementById("meno");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
    // close
    function colo() {
        var x = document.getElementById("meno");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }


    // img 

    const min = document.querySelector('.pro1')
    
    function ca1(){
        min.src ='./images/image-product-1.jpg' ;
    }
    function ca2(){
        min.src ='./images/image-product-2.jpg' ;
    }
    function ca3(){
        min.src ='./images/image-product-3.jpg' ;
    }
    function ca4(){
        min.src ='./images/image-product-4.jpg' ;
    }

// tex atc

const add = document.getElementById('add');
const nag = document.getElementById('nag');
let nam = document.getElementById('nam');
let nom = 0

add.addEventListener('click' , function(){

    re = nom++
    nam.innerText = re
});

nag.addEventListener('click' , function(){

    re = nom--
    nam.innerText = re


});

//cart


