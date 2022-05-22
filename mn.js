
const add = document.getElementById('add');
const nag = document.getElementById('nag');
let nam = document.getElementById('nam');

let nom = 0;

const pri = document.querySelector(".pri");
const od = document.querySelector(".atc");


const cart = document.querySelector('.cart');

// tog sec

    //open
    function opo() {
        let x = document.getElementById("meno");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
    // close
    function colo() {
        let x = document.getElementById("meno");
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

    // mb img

    const ba =document.querySelector(".ba")
    const gn =document.querySelector(".gn")
    
    
// tex atc

add.addEventListener('click' , function(){
  
  let re = nom++ +1
  nam.textContent = re;

    if(nom <= 0){
        nag.style.opacity=('0.3')
        od.style.opacity=('0.6');
        nom = 0 
        nam.textContent = "0";
    }
    else{
        nag.style.opacity=('1');
        od.style.opacity=('1');
    }

});

nag.addEventListener('click' , function(){

    let re = nom-- -1
    nam.textContent = re;

    if(nom <= 0){
        nag.style.opacity=('0.3')
        od.style.opacity=('0.6');
        nom = 0 
        nam.textContent = "0"
    }
    else{
        nag.style.opacity=('1');
        od.style.opacity=('1');
    }

});


// cart tog

cart.addEventListener('click', () =>{

        let x = document.querySelector('.cartatc');
        if (x.style.display === "none"){
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    });


// add cart

od.addEventListener('click', function(){
   
    if(nom >= 1){

        let x = document.querySelector('.zaid');

            x.style.display = "block";
            x.textContent = nom;
            let d = document.querySelector('.ycie');
            let s = document.querySelector('.cmlo');

             let pr = document.getElementById('comtt');
             let tot = document.querySelector('.cmla');

             let res =  125 * nom;

             pr.textContent = nom;
             tot.textContent = res;

            if(s.style.display === "none"){

                d.style.display = "none";
                s.style.display = "block";
             
            }else{  
                s.style.display = "block";
                d.style.display = "none";
                }

     }

     
});

 function dele(){
    let s = document.querySelector('.cmlo');
    let d = document.querySelector('.ycie');
    let x = document.querySelector('.zaid');

    s.style.display = "none";
    d.style.display = "block";
    x.style.display = "none";
 }


