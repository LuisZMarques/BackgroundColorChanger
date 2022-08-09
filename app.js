const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    var randomColor = colors[Math.floor(Math.random()*(colors.length-1))];
    console.log(randomColor);

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})