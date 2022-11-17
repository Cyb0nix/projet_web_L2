var newCommandForm = document.forms.newMembre; 


function ajouter(){
    console.log("tedst");
    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newMembre = document.createElement('tr')
    const nomTd = document.createElement('td')
    const prenomTd = document.createElement('td')
    const typeTd = document.createElement('td')
    nomTd.textContent = document.newMembre.nom.value
    prenomTd.textContent = document.newMembre.prenom.value
    typeTd.textContent = document.newMembre.type.value

    

    if (!document.newMembre.type.checkValidity() ||
          !document.newMembre.prenom.checkValidity() ||
          !document.newMembre.nom.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newMembre.append(nomTd, prenomTd, typeTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newMembre)

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}