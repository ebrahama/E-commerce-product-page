const clos = document.getElementById("close");
const opn = document.getElementById("tog");
const menu = document.getElementById("meno");


opn.addEventListener("click", () => {

       const visi =  nano.getAttribute('data-men');
    
    if(visi === "false"){

        opn.setAttribute("data-men" , true );
        clos.setAttribute("data-men" , false );
        menu.setAttribute("data-men" , false );

    }
})

clos.addEventListener("click", () => {

     const visi = nano.getAttribute('data-men');

    if(visi === "true"){

        opn.setAttribute("data-men" , false );
        clos.setAttribute("data-men" , true );
        menu.setAttribute("data-men" , true );

    }
})
