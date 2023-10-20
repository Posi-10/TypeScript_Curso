import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villain } from "../interface";


/* printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject("Hola Mundo"); */

// const name: string = "Posi"

/* printObject(genericFunction(3.141618).toFixed(2));
printObject(genericFunction(name).toUpperCase());
printObject(genericFunction(new Date()).getDate()); */

/* printObject(genericFunctionArrow(3.141618).toFixed(2));
printObject(genericFunctionArrow(name).toUpperCase());
printObject(genericFunctionArrow(new Date()).getDate()); */

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

printObject(genericFunctionArrow<Villain>(deadpool).dangerLevel);