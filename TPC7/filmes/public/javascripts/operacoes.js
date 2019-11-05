// apaga filme
function eliminarFilme(id) {
  axios
    .delete('/filmes/' + id)
    .then(response => window.location.assign('/filmes/'))
    .catch(err => console.log(err));
}

// atualizar filme
function atualizarFilme(id) {
  const novoFilme = {
    title: document.getElementById('title').value,
    year: document.getElementById('year').value
  };

  axios
    .put('/filmes/' + id, novoFilme)
    .then(response => window.location.assign('/filmes/' + id))
    .catch(err => console.log(err));
}
