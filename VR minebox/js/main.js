const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item--grabbed");
itemGrabbed.setAttribute("visible", false);
let grabbed = false;

item.onmouseenter = function(){
    if(item.getAttribute("visible") === true){
        item.setAttribute("visible", false);
        itemGrabbed.setAttribute("visible", true);
        grabbed = true;
        pickaxeGrabbed.setAttribute("visible", false);
        canIChopWood = false;
        pickaxeGrabbed2.setAttribute("visible", false);
        canIChopStone = false;
    }
}

const yellowSphere = document.getElementsByClassName("js--sphere");
const invisbleBox = document.getElementById("js--invisible-boxes");
console.log(invisbleBox);

for(let i = 0; i < yellowSphere.length; i++){
    yellowSphere[i].onmouseenter = function(){
        if(yellowSphere[i].getAttribute("visible") === false || grabbed === false)
        {
            return;
        }
        let position = yellowSphere[i].getAttribute("position");
        position.y = position.y + 1;
        yellowSphere[i].setAttribute("visible", false);
        invisbleBox.setAttribute("position",position);
        invisbleBox.setAttribute("visible", true);
        itemGrabbed.setAttribute("visible", false);
        grabbed = false;
    }
}

const trees = document.getElementsByClassName("js--tree");
let wood = 0;
const pickaxe = document.getElementById("js--pickaxe");
const pickaxeGrabbed = document.getElementById("js--pickaxe--grabbed");
pickaxeGrabbed.setAttribute("visible", false);

pickaxe.onmouseenter = function(){
    if(pickaxe.getAttribute("visible") === true){
        pickaxe.setAttribute("visible", false);
        pickaxeGrabbed.setAttribute("visible",true);
        itemGrabbed.setAttribute("visible", false);
        canIChopWood = true;
    }
}

let canIChopWood = false;

for(let i = 0; i <trees.length; i++){
    trees[i].onmouseenter = function(){
        if(trees[i].getAttribute("visible") === true && canIChopWood === true){
            trees[i].setAttribute("visible", false);
            wood = wood + 1;
            document.getElementById("js--wood").innerText = wood;
        }
    }
}

const castles = document.getElementsByClassName("js--castle");
let stone = 0;
const pickaxeStone = document.getElementById("js--pickaxe-stone");
const pickaxeGrabbed2 = document.getElementById("js--pickaxe--grabbed2");
pickaxeGrabbed2.setAttribute("visible", false);

pickaxeStone.onmouseenter = function(){
    if(pickaxeStone.getAttribute("visible") === true){
        pickaxeStone.setAttribute("visible", false);
        pickaxeGrabbed2.setAttribute("visible",true);
        itemGrabbed.setAttribute("visible", false);
        canIChopStone = true;
    }
}

let canIChopStone = false;

for(let i = 0; i <castles.length; i++){
    castles[i].onmouseenter = function(){
        if(castles[i].getAttribute("visible") === true && canIChopStone === true){
            castles[i].setAttribute("visible", false);
            stone = stone + 1;
            document.getElementById("js--stone").innerText = stone;
        }
    }
}






