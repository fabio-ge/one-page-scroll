document.addEventListener("DOMContentLoaded", function() {
    //selettori DOM
    let mainNav = document.querySelector('#mainNav');
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    let bottone = document.querySelector("#bottone");
    let form = document.querySelector("form");
    
    //eventi
    hamburger.addEventListener("click", mobileMenu);

    mainNav.addEventListener("click", (e) => {
        e.preventDefault(); //altrimenti seguo il link prima dell' animazione
        let hash = e.target.hash;
        if(hash == null) return; // se non ho cliccato sul menù, non faccio niente
        closeMenu();

        let hashTopPosition = document.querySelector(hash).offsetTop;
        window.scrollTo({
            top: hashTopPosition,
            behavior: "smooth"
        });
    });

    bottone.addEventListener("click",(e)=>{
        e.preventDefault();
        sendMail();
    });

    //utility functions
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    function sendMail(){
        let data = new FormData(form);
        let url = `/cgi-bin/send.py?nome=${encodeURIComponent(data.get("nome"))}&email=${encodeURIComponent(data.get("email"))}&oggetto=${encodeURIComponent(data.get("oggetto"))}&messaggio=${encodeURIComponent(data.get("messaggio"))}`; 

        /*
            TODO: implementare un sistema di notifiche migliore dell' alert ;-)
        */
        fetch(url)
            .then(response => {
                if(!response.ok){
                    alert("Errore nell' inviare il messaggio");
                    throw Error("Errore nell' inviare il messaggio.");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if(data.result == 1){
                    // se ho fatto quello che devo, resetto la form
                    form.reset();
                    alert('Messaggio inviato con successo');
                }
            })
            .catch(error => alert(error));
    }
    
});