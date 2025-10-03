const flowers = ['🌸','🌹','🌷','🪻','🌼','🌻','🌺','🥀','🏵️','🪷','💮'];
const garden = document.querySelector('.garden');
const flowerSelect = document.querySelector('#flowerSelect');
const growtypeSelect = document.querySelector('#growtype');
const audio = new Audio('./assets/click.mp3'); audio.volume = 1;

function flower() {
    if (flowerSelect.value == 'random') {
        return flowers[Math.floor(Math.random() * flowers.length)];
    } else {
        return flowerSelect.value;
    }
}

function createPlant(i) {
    const flowerElement = document.createElement('span');
    flowerElement.textContent = flower();
    flowerElement.style.color = 'transparent';

    const eventType = growtypeSelect.value;
    flowerElement.addEventListener(eventType, () => {
        flowerElement.style.color = 'white';
        flowerElement.textContent = flower();
        flowerElement.style.textShadow = '4px 4px 8px gray;';

        //audio.currentTime = 0;
        audio.play();

        flowerElement.classList.add("hover-animation");

        setTimeout(() => {
            flowerElement.classList.remove("hover-animation");
        }, 10);
    });

    return flowerElement;
}

function renderGarden() {
    garden.innerHTML = "";
    const totalFlowers = 555;

    for (let i = 0; i < totalFlowers; i++) {
        garden.appendChild(createPlant(i));
    }
}

function clearGarden() {
    renderGarden();
}


renderGarden();
window.addEventListener("resize", renderGarden);
growtypeSelect.addEventListener("change", renderGarden);