var colorList=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const btn = document.getElementById("mainButton");
const color = document.getElementById("textColor");
function randomColor(){
    let hex_color="#";
    for (let i=0; i<6 ;i++){
        hex_color += colorList[Math.floor(Math.random()*colorList.length)];
    }
    console.log(hex_color);
    document.body.style.backgroundColor = hex_color;
    color.textContent = hex_color;
    color.style.color = hex_color;
}
btn.addEventListener("click", randomColor);







