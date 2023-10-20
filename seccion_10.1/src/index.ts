import { Hero as SuperHero, Hero2, Hero3, Hero4, Hero5 } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";

console.log('Hola Mundo!!!!');

const iroman = new SuperHero('Ironman', 1, 55);
// const iroman = new HeroClasses.Hero('Ironman', 1, 55);

console.log(iroman);
console.log(iroman.power);