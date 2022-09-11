let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
/*Petite demonstration du DOM dans ce fichier JavaScript*/
//Retenez le bien de modèle Objet est un classique des langages

let myImage = document.querySelector('img');
myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://images.alphacoders.com/111/thumbbig-1117554.webp'){
        myImage.setAttribute('src', 'https://cdn2.civitatis.com/reino-unido/londres/galeria/crucero-tamesis.jpg');
    }else{
        myImage.setAttribute('src', 'https://images.alphacoders.com/111/thumbbig-1117554.webp')
    }
});

//Début du gestionnaire de compte utilisateur
myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('Veuillez saisir votre nom','Anonym User');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenu, ' + myName;
}

if(!localStorage.getItem('nom')){
    setUserName();
}else{
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenu, ' + storedName;
}

myButton.addEventListener('click', function(){
    setUserName();
});