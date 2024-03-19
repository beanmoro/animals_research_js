import { Animal } from "../animal.module.js";
import { playSound } from "../utils.module.js";

export class Wolf extends Animal{

    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }

    howl(){
        playSound(this.sound);
    }
}