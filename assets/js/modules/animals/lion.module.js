import { Animal } from "../animal.module.js";
import { playSound } from "../utils.module.js";

export class Lion extends Animal{
    
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }

    roar(){
        playSound(this.sound);
    }
}