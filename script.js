let counter = 17;

function updateCounter() {
    const counterElement = document.getElementById('text');
    counterElement.textContent = counter;
}

function increase() {
    if (counter < 30) {
        counter++;
        updateCounter();
    }
}

function decrease() {
    if (counter > 17) {
        counter--;
        updateCounter();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateCounter();
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.currentTime = 0;
        audio.play();
    });
});

const text = document.getElementById('text');
const div = document.getElementById('colorDiv');
const button = document.getElementById('fadeButton');
let isTan = true;

button.addEventListener('click', () => {
    if (isTan) {
        div.style.backgroundColor = '#71664b'; 
    } else {
        div.style.backgroundColor = 'gray'; 
    }
    isTan = !isTan; 
});

let isHidden = false;

button.addEventListener('click', () => {
    if (isHidden) {
        text.style.opacity = 1;
    } else {
        text.style.opacity = 0;
    }
    isHidden = !isHidden;
});
