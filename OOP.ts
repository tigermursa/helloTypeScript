//! CLASS AND OBJECT
class Animal {
  // class er properties
  public name: string;
  private species: string;
  protected sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`says ${this.name}`);
  }
}

const dog = new Animal("German", "L3", "Gheao"); //instance
// dog.makeSound();

//! Inheritance in OOP

class Animal2 {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`says ${this.name}`);
  }
}

class AnimalChild1 extends Animal2 {
  extra: boolean;
  constructor(name: string, species: string, sound: string, extra: boolean) {
    super(name, species, sound);
    this.extra = extra;
  }
  makeSound() {
    console.log(`says ${this.name}`);
  }
}
