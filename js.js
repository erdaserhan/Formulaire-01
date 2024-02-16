
function control () {
    const form = document.querySelector(".form");
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const password = document.getElementById("password").value;    

    
    form.addEventListener('submit', function(e) {  
        e.preventDefault();});


    if (nom.length > 5 || prenom.length > 5){
      alert("Le nom ou prénom doit avoir max 5 caractéres");
      return;
    }else if  
    (/[A-Z]/.test(password) 
    && /\d/.test(password) 
    && /[!@#$%^&*(),.?":|<>]/.test(password)
    && password.length >=10 )
    {
        alert("Bienvenue " + prenom);
        setTimeout(direction, 2000);        
    } 
    else {
      alert("Password n'est pas valide");
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
