export class Animal {
    #name;
    #age;
    #img;
    #comments;
    #sound;


    constructor(name, age, img, comments, sound){
        this.#name = name;
        this.#age = age;
        this.#img = img;
        this.#comments = comments;
        this.#sound = sound;
    }

    get name() {
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get img(){
        return this.#img;
    }

    set comments(value){
        this.#comments = value;
    }

    get comments(){
        return this.#comments;
    }

    get sound(){
        return this.#sound;
    }

}