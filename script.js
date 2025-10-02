function canviNom() {
    let nom = prompt("Com vols dir-te?")
    document.getElementById("nom").innerHTML = "<strong>Nom: </strong>" + nom;
}


function canviFoto(){
    let foto = prompt ("Quina imatge vols ser?");
    document.getElementById("foto").src = foto

}

function invisibilitat(){
    if(document.getElementById("foto").hidden == true ){
        document.getElementById("foto").hidden = false

    }else{
        document.getElementById("foto").hidden = true
    }
}