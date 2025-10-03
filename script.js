function canviNom() {
    let nom = prompt("Com vols dir-te?")
    document.getElementById("nom").innerHTML = "<strong>Nom: </strong>" + nom;
}


function canviFoto(){
    let foto = prompt ("Quina imatge vols ser?");
    document.getElementById("foto").src = foto

}

function canviFondo(){
    let body = document.getElementsByTagName("body")[0]
    let foto = prompt("A on vols viatjar?")
    body.style = "background-image: url('"+foto+"'); background-size: cover;"

}

function tradueix(){
    let body = document.getElementsByTagName("body")[0]
    body.style = "font-family: Georgia, 'Times New Roman', Times, serif;"

}



function invisibilitat(){
    document.getElementById("foto").style = "display: none"

}

function mésinfo(){
    let llista = document.getElementById("expL");
    let element = document.createElement("li");
    element.innerHTML = prompt("Què vols afegir?")
    llista.appendChild(element)

}

