import { getData } from "./modules/service.module.js";
import { Lion } from "./modules/animals/lion.module.js";
import { Wolf } from "./modules/animals/wolf.module.js";
import { Bear } from "./modules/animals/bear.module.js";
import { Snake } from "./modules/animals/snake.module.js";
import { Eagle } from "./modules/animals/eagle.module.js";
import { createCard } from "./modules/elements.module.js";

//Inputs
const animalSelect = document.querySelector('#animal');
const ageSelect = document.querySelector('#edad');
const commentTextArea = document.querySelector('#comentarios');
const addButton = document.querySelector('#btnRegistrar');


//Outputs
const previewDiv = document.querySelector('#preview');
const animalsResearchDiv = document.querySelector('#Animales');


//Consts
const API_URL = '../../animales.json';





( async () => {



    try {

        const animalRequest = await getData(API_URL);
        const animalData = animalRequest.animales;
        let animalSelectedData = null;


        animalSelect.addEventListener('change', () =>{

            animalSelectedData = animalData.find(e=> e.name == animalSelect.value);
            previewDiv.style.backgroundImage = `url(../assets/imgs/${animalSelectedData.imagen})`
        });


        addButton.addEventListener('click', () => {

            
            if(!animalSelect.value || !ageSelect.value || !commentTextArea.value.trim() ){
                alert('Error: Necesita completar todos los campos!')
                return;
            }

            let animal = null;

            switch(animalSelectedData.name.toLowerCase()){
                case 'leon':
                    animal = new Lion(animalSelectedData.name, ageSelect.value, animalSelectedData.imagen, commentTextArea.value, animalSelectedData.sonido);
                    break;
                case 'lobo':
                    animal = new Wolf(animalSelectedData.name, ageSelect.value, animalSelectedData.imagen, commentTextArea.value, animalSelectedData.sonido);
                    break;
                case 'oso':
                    animal = new Bear(animalSelectedData.name, ageSelect.value, animalSelectedData.imagen, commentTextArea.value, animalSelectedData.sonido);
                    break;
                case 'serpiente':
                    animal = new Snake(animalSelectedData.name, ageSelect.value, animalSelectedData.imagen, commentTextArea.value, animalSelectedData.sonido);
                    break;
                case 'aguila':
                    animal = new Eagle(animalSelectedData.name, ageSelect.value, animalSelectedData.imagen, commentTextArea.value, animalSelectedData.sonido);
                    break;
            }



            animalsResearchDiv.appendChild(createCard(animal));


            //Ya que no esta dentro de un form asi hice el reset
            animalSelect.value = 0;
            ageSelect.value = 0;
            commentTextArea.value = "";

        });



        
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }


})();