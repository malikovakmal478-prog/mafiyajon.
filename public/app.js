const tg =
    window.Telegram?.WebApp;

if (tg) {

    tg.ready();

    tg.expand();

}


const home =
    document.getElementById("home");

const lobby =
    document.getElementById("lobby");

const game =
    document.getElementById("game");


const joinButton =
    document.getElementById("joinButton");


const startButton =
    document.getElementById("startButton");


const playerCount =
    document.getElementById("playerCount");


const players =
    document.getElementById("players");


function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(element => {

            element.classList.remove(
                "active"
            );

        });

    screen.classList.add("active");

}


joinButton.addEventListener(
    "click",
    () => {

        showScreen(lobby);

        addDemoPlayer();

    }
);


startButton.addEventListener(
    "click",
    () => {

        showScreen(game);

    }
);


function addDemoPlayer() {

    const user =
        tg?.initDataUnsafe?.user;

    const name =
        user?.first_name ||
        "O'yinchi";

    playerCount.textContent = "1";

    players.innerHTML = `
        <div class="player">

            <div class="avatar">
                👤
            </div>

            <div>
                ${escapeHtml(name)}
            </div>

        </div>
    `;

}


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}
