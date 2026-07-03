const notesContainer = document.getElementById("notes");

fetch("notes.json")
    .then(response => response.json())
    .then(notes => {

        notes.forEach((note, index) => {

            const card = document.createElement("article");

            card.className = "note";

            card.style.animationDelay = `${index * 0.15}s`;

            card.innerHTML = `
                <div class="note-date">
                    ${note.date} • ${note.time}
                </div>

                <div class="note-text">
                    ${note.text}
                </div>
            `;

            notesContainer.appendChild(card);

        });

    });

const music = document.getElementById("music");

const button = document.getElementById("musicButton");

button.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        button.textContent = "❚❚ Пауза";

    } else {

        music.pause();

        button.textContent = "♫ Включить музыку";

    }

});
