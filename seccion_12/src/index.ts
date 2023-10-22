import { Pokemon } from "./decorators/Pokemon";

const charmander = new Pokemon('charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander)

charmander.publicApi = 'google.com'

// charmander.savePokemonToDB(-50);