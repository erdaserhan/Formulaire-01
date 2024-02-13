
function control () {
    const form = document.querySelector(".form");
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const password = document.getElementById("password").value;

    form.addEventListener('submit', function(e) {  
        e.preventDefault();});

    if (/[A-Z]/.test(password) 
    && /\d/.test(password) 
    && /[!@#$%^&*(),.?":|<>]/.test(password)
    && password.length >=10 )
    {
        alert("Bienvenue " + prenom);
        setTimeout(direction, 2000);        
    }
}

function direction() {
    window.location.href="https://2023.webdev-cf2m.be/Erhan/PrefoSiteWeb/";
  }

  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
