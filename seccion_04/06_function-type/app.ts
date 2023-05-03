(() => {

  const addNumber = ( a: number, b: number ): number => a + b;

  const greet = ( name: string ): string => `Hola ${ name }`;

  const saveTheWorld = (): string => 'El mundo está salvado';

  //! let myFunction: Function;

  let myFunction: () => string;

  //? myFunction = 10;
  //? console.log(myFunction);

  //* myFunction = addNumber
  //* console.log(myFunction(1,2));

  //¡ myFunction = greet;
  //¡ console.log(myFunction('Posi'));

  myFunction = saveTheWorld;
  console.log(myFunction());
  
})()