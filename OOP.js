"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`says ${this.name}`);
    }
}
const dog = new Animal("German", "L3", "Gheao"); //instance
dog.makeSound();
