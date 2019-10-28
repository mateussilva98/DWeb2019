/* Atualizar um elemento da base de dados */

function update_mus(ident) {
    const nova = {
		prov: document.getElementById("prov").value,
        local: document.getElementById("local").value,
        tit: document.getElementById("tit").value,
        musico: document.getElementById("musico").value,
        duracao: document.getElementById("duracao").value
    }
	axios.put("/up/" + ident, nova)
        .then(response => window.location.assign("/a/" + nova.tit))
        .catch(err => console.log(err))
}