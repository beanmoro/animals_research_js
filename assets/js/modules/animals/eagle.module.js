import { Animal } from "../animal.module.js";
import { playSound } from "../utils.module.js";

export class Eagle extends Animal{

    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }


    chirp(){
        playSound(this.sound);
    }
}