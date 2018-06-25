//déclaration de la fonction qui change la couleur des inputs si les mots de passe sont différents
function check(){
  var mdp = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPassword').value;
  //déclaration de la regex
  var regex = /^[a-zA-Z0-9]+$/;
  if ((regex.test(mdp)) && (regex.test(confirm))){
    if (mdp != confirm){
  //si les mots de passe ne correspondent pas
      mdp = document.getElementById('password').style.border = '1px solid red';
      confirm = document.getElementById('confirmPassword').style.border = '1px solid red';
    }else{
  //si les mots de passe correspondent
      mdp = document.getElementById('password').style.border = '1px solid green';
      confirm = document.getElementById('confirmPassword').style.border = '1px solid green';
    }
  }else{
    //message d'erreur si utilisation de mauvais caractères
    alert('ne pas utiliser de caractères spéciaux');
  }
}
