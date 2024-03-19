import { Animal } from "../animal.module.js";
import { playSound } from "../utils.module.js";

export class Snake extends Animal{

    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }

    hiss(){
        playSound(this.sound);
    }
}