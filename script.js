const miP = document.getElementById("miP");
const botonTraerPersonajes = document.getElementById("botonTraerPersonajes");

        function traerPersonajes(cantidad) {
            fetch(`https://rickandmortyapi.com/api/character/?page=1`)
                .then(response => response.json())
                .then(data => {
                    miP.innerHTML = "";
                    const characters = data.results.slice(0, cantidad); 
                    characters.forEach(info => {
                        const characterCard = document.createElement('mi_P');
                        characterCard.classList.add('character-card');
                        characterCard.innerHTML = `
                            <h3 class="">Nombre: ${info.name}</h3>
                            <h3>Especie: ${info.species} </h3>
                            <h3>Género: ${info.gender} </h3>
                            <img src="${info.image}"></img><br><br>`;
                        miP.appendChild(characterCard);
                    });
                })
                .catch(error => console.log(error));
        }

        botonTraerPersonajes.addEventListener("click", () => {
            const cantidad = prompt("Ingresa la cantidad de personajes que deseas traer:");
            if (cantidad !== null) {
                traerPersonajes(cantidad);
            }
        });