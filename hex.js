const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    var randomColor = getHexValue();
    console.log("randomcolor:" + randomColor);
})

function getHexValue(){
    var hexValue;;
    var singleValue;
    for(i=0 ; i<=5 ; i++){
        singleValue = hex[Math.floor(Math.random()*(hex.length-1))];
        console.log("SingleVFunction:" + singleValue);
        if(i===0){
           hexValue = singleValue;
        }else{
            hexValue = hexValue.toString() + singleValue.toString();
            console.log("HexFunctionFORLOOP:" + hexValue);
        }
    }
    return hexValue;
}