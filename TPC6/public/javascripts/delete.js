/* Apagar elemento da base de dados */

function eliminarItem(ident) {
    axios.delete("/del/" + ident)
        .then(response => window.location.assign("/"))
        .catch(err => console.log(err))
}