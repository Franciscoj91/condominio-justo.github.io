
let navLinks = document.getElementsByClassName('nav-link');

navLinks = Array.from(navLinks);

navLinks.forEach(element => {
    element.addEventListener("click", function() {
        let currentElement = document.getElementsByClassName('active');
        currentElement[0].className = currentElement[0].className.replace('active', '');
        element.className += ' active';  

        let burgerButton = document.getElementsByClassName('navbar-toggler');
        let hideList = document.getElementById('navbarSupportedContent');

        if (hideList.classList.contains('show')) {
            burgerButton[0].click();
        }
    })
});  
    
    

const myCarouselElement = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 9000,
    ride: "carousel",
    wrap : true,
    touch: true,
    pause: false
});


function myFunction(x) {
    let cards = document.getElementsByClassName('card');
    console.log(cards[3].style.height);
    cards[0].style.height = "100%";
    cards[1].style.height = "100%";
    cards[2].style.height = "100%";

    
  }
  
  var x = window.matchMedia("(screen)")
  myFunction(x);
  x.addEventListener('resize', myFunction);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        center: false,
        stagePadding: 0,
        dots: false,
        autoWidth: false,
        responsive : {
            0: {
                items:1,
                center:false,
                margin: 0,
                stagePadding: 50

            },
            700: {
                items:3,
                margin: 50
            },
            1000: {
                items:4,
                margin: 22
            }
        }
    });
});


