var cont = 0;

setTimeout ("Count()",500);
function Count() {
    cont++
    document.getElementById("label1").innerHTML = cont;
    setTimeout("Count()",500);
}