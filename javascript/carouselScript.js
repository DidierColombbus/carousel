let cadre = document.getElementById("carouselExampleControls");

cadre.style.width = "30vw";

// Utiliser un décompte pour activer successivement des z-index de 3 photos superposées?
// Par exemple à chaque fois que l'on passe un certain nombre de secondes.

// let premierchaton = document.getElementById('chaton1');
// let secondchaton = document.getElementById('chaton2');
// let troisiemechaton = document.getElementById('chaton3');
// let quatriemechaton = document.getElementById('chaton4');

// let chaine = ['premierchaton', 'secondchaton', 'troisiemechaton', 'quatriemechaton'];

// let carousel = chaine.shift();

let lst = document.querySelectorAll("#versionjs > div");
listNode = Array.from(lst);

let intervalId = setInterval(carousel, 2000);

// Passer la première image en opacity 1, laisser les autres à 0
function carousel(){
    element = listNode.shift();
    element.style.opacity = '0';
    element.style.transitionDuration = '1s'
    listNode.push(element);
    listNode[0].style.opacity = '1'
}

// mouseover = clearInterval pour suspendre le décompte et
// avec mouseout = setInterval pour reprendre 

versionjs.addEventListener("mouseover", pause);

function pause(){
    clearInterval(intervalId);
}

versionjs.addEventListener("mouseout", restart);

function restart(){
    intervalId = setInterval(carousel, 2000);
}








