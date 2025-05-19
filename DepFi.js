const filieres = document.querySelectorAll('.depinfo')
function showFiliere(filiereId){
    removeActive()
    const selectedFiliere = document.getElementById(filiereId)

    selectedFiliere.classList.add('active')
}
function removeActive(){
    filieres.forEach((q)=>{
        q.classList.remove('active')
    } )    
}

