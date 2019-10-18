function ReceberInf() {
    if(CondicaoNome() == true && CondicaoLati() == true && CondicaoLongi() == true && CondicaoDescri() == true){
        document.getElementById("errMenssage").innerHTML = "Cadastro Efetuado!";
        return true;
    }else{
        document.getElementById("errMenssage").innerHTML = "";
        return false;
    }
}

function CondicaoNome() {
    if (document.getElementById("name").value.length <= 255 && document.getElementById("name").value.length > 0) {
        document.getElementById("errNome").innerHTML = "";
        return true;
    }else{
        document.getElementById("errNome").innerHTML = "Nome está fora dos padrões";
        return false;
    }
}

function CondicaoLati() {
    if (parseFloat(document.getElementById("lati").value) <= 90 && parseFloat(document.getElementById("lati").value) >= -90) {
        document.getElementById("errLati").innerHTML = "";
        return true;
    }else{
        document.getElementById("errLati").innerHTML = "A Latitude encontra-se errada!";
        return false;
    }
}

function CondicaoLongi() {
    if (parseFloat(document.getElementById("longi").value) <= 180 && parseFloat(document.getElementById("longi").value) >= -180) {
        document.getElementById("errLongi").innerHTML = "";
        return true;
    }else{
        document.getElementById("errLongi").innerHTML = "A Longitude encontra-se errada!";
        return false;
    }
}

function CondicaoDescri() {
    if (document.getElementById("descri").value.length <= 2000 && document.getElementById("descri").value.length > 0){
        document.getElementById("errDescri").innerHTML = "";
        return true;
    }else{
        document.getElementById("errDescri").innerHTML = "Quantidade de caracteres excedida ou Vazia.";
        return false;
    }
}