let numberSelect = 0;
const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

userInput.addEventListener("change", () => {
    numberSelect = parseInt(userInput.value);
});

function iniciarContador() {
    let segundos = 5;
    const intervalId = setInterval(() => {
        if (segundos >= 0) {
            countdown.innerText = segundos;
            segundos--;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

const getPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let mensaje = "";
            const randomNumber = Math.floor(Math.random() * 3) + 1;
            if (numberSelect === randomNumber) {
                mensaje = `<h2>¡Has salvado el mundo!</h2><p>Tu número ${numberSelect} es igual a ${randomNumber}</p>`;
            } else {
                mensaje = `<h2>¡La bomba ha explotado!</h2><p>Tu número ${numberSelect} no es igual a ${randomNumber}</p>`;
            }
            resolve(mensaje);
        }, 6000);
    });
};

function iniciarJuego() {
    result.innerHTML = '';
    iniciarContador();
    getPromise().then(data => result.innerHTML = data);
}

restart.addEventListener('click', iniciarJuego);

iniciarJuego();