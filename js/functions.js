// check for saved 'lightMode' in localStorage
let lightMode = localStorage.getItem('lightMode'); 

const lightModeToggle = document.querySelector('#light-mode-toggle');

const enablelightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('lightmode');
  // 2. Update lightMode in localStorage
  localStorage.setItem('lightMode', 'enabled');
}

const disablelightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('lightmode');
  // 2. Update lightMode in localStorage 
  localStorage.setItem('lightMode', null);
}
 
// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === 'enabled') {
  enablelightMode();
}

// When someone clicks the button
lightModeToggle.addEventListener('click', () => {
  // get their lightMode setting
  lightMode = localStorage.getItem('lightMode'); 
  
  // if it not current enabled, enable it
  if (lightMode !== 'enabled') {
    enablelightMode();
  // if it has been enabled, turn it off  
  } else {  
    disablelightMode(); 
  }
});



// Which Elements gets observed 
const elements = document.querySelectorAll('.intro-transiton') //Elemente  hinz
elements.forEach(element => {
  this.elementObserver(element)
})


// Observe Elements which are in view
function elementObserver(element) {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('is-intersecting')
      }

      if (!entry.isIntersecting && !(entry.boundingClientRect.y < entry.rootBounds.y)) {
        element.classList.remove('is-intersecting')
      }
    })
  },{
    root: window.document,
    rootMargin: '0px',
    threshold: [ 0, .5, 1 ]
  })
  observer.observe(element)
}

//Prüfung Formular

function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Validating the name field
  var nameField = document.getElementById("name");
  if (nameField.value.trim() === "") {
    alert("Bitte geben Sie Ihren Namen ein.");
    return false;
  }
  
  // Validating the email field
  var emailField = document.getElementById("email");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return false;
  }
  
  // Validating the message field
  var messageField = document.getElementById("message");
  if (messageField.value.trim() === "") {
    alert("Bitte geben Sie eine Nachricht ein.");
    return false;
  }
  
  // If all fields are valid, you can proceed with form submission
  document.getElementById("myForm").submit();
}


//Typewriter-Effekt


var placeholderMessage = "Hallo Jonas \n\nHättest du nächste Woche Zeit ein Imagefilm für meine Firma zu drehen? \n\nFreundliche Grüsse \nNeo";
var placeholderElement = document.getElementById("message");
    var index = 0;

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          triggerTypewriter();
        }
      });
    }, { threshold: 0.5 });

    function triggerTypewriter() {
      index = 0;
      placeholderElement.placeholder = ""; // Zurücksetzen des Placeholder-Texts
      typeWriter(); // Typewriter-Effekt starten
    }

    function typeWriter() {
      if (index < placeholderMessage.length) {
        placeholderElement.placeholder += placeholderMessage.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Geschwindigkeit des Typewriter-Effekts anpassen (in Millisekunden)
      }
    }

    observer.observe(placeholderElement);


//


const navToggle = document.querySelector('.togglenavigation');

// When someone clicks the button
navToggle.addEventListener('click', () => {
  // get their lightMode setting
  document.body.classList.toggle('navOpen')
});

const navItems = document.querySelectorAll('.navbar--mob .navbar__item');

navItems.forEach(navitem => {
  navitem.addEventListener('click', () => {
    document.body.classList.remove('navOpen')
  });
});