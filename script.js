var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var clockFace = hours + ':' + minutes + ':' + seconds;
document.getElementById('color-clock').innerHTML = clockFace;
console.log(clockFace);
