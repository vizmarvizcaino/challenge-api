window.onload = function () {

  const template = document.querySelector(".modelo-dato-usuario").content
  const contenedorDatoUsuario = document.querySelector(".contenedor-dato-usuario");
  const buscadorInput = document.querySelector(".buscar-datos");
 
  buscadorInput.addEventListener("input", (e) => {
    const value = e.target.value
    console.log(value)
  })

  function getResource() {
    return new Promise(function(resolve, reject) {
     axios.get('https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories')
        .then(function (response) {
          // handle success
          resolve(response.data);
          response.data.communityCategories.forEach(element => {
          template.querySelector(".image").setAttribute("src", `${element.logo}`)
          template.querySelector(".titulo").textContent = `${element.name}`
          template.querySelector(".usuario").textContent = `User ${element.users}`
          template.querySelector(".descripcion").textContent = `Quizzes ${element.totalQuizzes}`
          const clone = template.cloneNode(true).children[0]
          contenedorDatoUsuario.append(clone);
          document.querySelector(".cargando").style.display = 'none'
          });
        })
    });
  }
  getResource()

}