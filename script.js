
const personaje={
    name:'Ryu',
    health: 100,
    normalImage: "img/guile.gif",
    attackImage: "img/guileHit.gif",
    state: 1
}

const enemie={
    name:'Blanka',
    health: 100,
    normalImage: "img/blanka.gif",
    attackImage: "img/blankaHit.gif",
    state: 1
}

function attack(){
    
    var enemieHealth = document.getElementById("enemiePlayer");
    var image= document.getElementById("gilu");
    var delayInMilliseconds =500;
    
    if(enemie.health > 0)
        enemie.health -= 10;

    enemieHealth.textContent = enemie.health.toString();     

    image.src= personaje.attackImage;
    setTimeout(() => {
        image.src= personaje.normalImage;
    }, delayInMilliseconds);
}




function attackEnemie(){
    
    var myplayer = document.getElementById("myPlayer");
    var image= document.getElementById("blanka");
    var delayInMilliseconds =500;

    if(personaje.health > 0)
        personaje.health -= 10;

    myplayer.textContent = personaje.health.toString();   

    image.src= enemie.attackImage;
    setTimeout(() => {
        image.src= enemie.normalImage;
    }, delayInMilliseconds);
}
