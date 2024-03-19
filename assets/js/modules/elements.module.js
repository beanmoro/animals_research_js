import { playSound } from "./utils.module.js";

const infoModal = document.querySelector('#exampleModal');

export const createCard = (animal) => {

    const div = document.createElement('div');
    div.className = 'p-2';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card'
    cardDiv.style.width = '150px';


    const modalButton = document.createElement('button');
    modalButton.setAttribute('data-bs-toggle', 'modal');
    modalButton.setAttribute('data-bs-target', '#exampleModal');
    modalButton.className ='rounded-2 rounded-bottom-0';


    const animalImage = document.createElement('img');
    animalImage.className = 'card-img-top';
    animalImage.style.height = '200px';
    animalImage.style.objectFit = 'cover';
    animalImage.src = `./assets/imgs/${animal.img}`;

    modalButton.appendChild(animalImage);

    const audioButton = document.createElement('button');
    audioButton.className = 'btn btn-secondary rounded-top-0';

    const audioIcon = document.createElement('img');
    audioIcon.src = "./assets/imgs/audio.svg";
    audioIcon.alt = `${animal.name}`;
    audioIcon.style.width = "16px";

    audioButton.appendChild(audioIcon);

    let soundFunc = null;

    switch(animal.name.toLowerCase()){
        case 'leon':
            audioButton.addEventListener('click', () => animal.roar());
            break;
        case 'lobo':
            audioButton.addEventListener('click', () => animal.howl());
            break;
        case 'oso':
            audioButton.addEventListener('click', () => animal.growl());
            break;
        case 'serpiente':
            audioButton.addEventListener('click', () => animal.hiss());
            break;
        case 'aguila':
            audioButton.addEventListener('click', () => animal.chirp());
            break;
    }

    


    modalButton.addEventListener('click', () => {
        const modalBody = document.querySelector('.modal-body');
        

        modalBody.innerHTML = `
            <br>
            <img src='./assets/imgs/${animal.img}'  style='width: 400px;'/>
            <h4>${animal.age}</h4>
            <h5>Comentarios</h5>
            <br>
            <p>${animal.comments}</p>
        `



    });




    

    cardDiv.appendChild(modalButton);
    cardDiv.appendChild(audioButton);
    div.appendChild(cardDiv);
    
    return div;
}
