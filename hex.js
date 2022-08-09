const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    var randomColor = getHexValue();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function getHexValue(){
    var hexValue = "#";
    for(i=0 ; i<=5 ; i++){
        hexValue = hexValue.toString() + hex[Math.floor(Math.random()*(hex.length-1))];
    }
    return hexValue;
}