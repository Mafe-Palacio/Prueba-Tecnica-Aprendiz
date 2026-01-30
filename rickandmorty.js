const character = document.getElementById("character");

const likes = {};
const dislikes = {};


fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {console.log(data.results);
        data.results.forEach(personaje  => {
            character.innerHTML += `
            <div class="card">
                <img src= '${personaje.image}' width='200'>
                <br>
                <br><strong>Nombre:</strong> ${personaje.name}
                <br><strong>Estado:</strong> ${personaje.status}
                <br><strong>Especie:</strong> ${personaje.species}
                <br><br>

                <div class="botones">
                    <div class="voto">
                        <button class='like' data-id='${personaje.id}'>
                            <img src="img/like.png" alt="Like" class="icon">
                            Like
                        </button>
                        <span class="contador" id="like-${personaje.id}">0</span>
                    </div>
                    <div class="voto">
                        <button class='dislike' data-id='${personaje.id}'>
                            <img src="img/dislike.png" alt="Dislike" class="icon">
                            Dislike
                        </button>
                        <span class="contador" id="dislike-${personaje.id}">0</span>
                    </div>
                </div>
            </div>
            `
            console.log(personaje);
        });
    });

character.addEventListener("click", (evento) => {
    const id = evento.target.dataset.id;

    if (evento.target.classList.contains("like")) {
        if (!likes[id]) {
            likes[id] = 0;
        }
        likes[id]++;
        console.log("Likes:", likes);
        document.getElementById(`like-${id}`).textContent = likes[id];
    }

    if (evento.target.classList.contains("dislike")) {
        if (!dislikes[id]) {
            dislikes[id] = 0;
        }
        dislikes[id]++;
        console.log("Dislikes:", dislikes);
        document.getElementById(`dislike-${id}`).textContent = dislikes[id];
    }
});
