let container = document.getElementById("container");
let line = "";
for(let i = 99; i>=1; i--){
    if(i == 1){
        line = "<br>" + "1 bottle of beer on the wall, 1 bottle of beer" + "<br> Take one down and pass it around, no more bottles of beer on the wall" + "<br> No more bottles of beer on the wall, no more bottles of beer" + "<br>Go to the store and buy some more, 99 bottles of beer on the wall";
        container.innerHTML += line;
        break;
    }
    line = "<br>" + i+" bottles of beer on the wall, " + i + " bottles of beer" + "<br>Take one down and pass it around, "+ (i-1) +" bottles of beer on the wall";
    container.innerHTML += line;
}
