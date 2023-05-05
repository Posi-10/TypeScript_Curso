(() => {

  //¡ Objetos

  type Avengers = {
    nick:string,
    ironman:string;
    vision:string,
    activo:boolean;
    poder:number;
  }

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  // const { poder, vision } = avengers;
  // console.log( poder, vision.toUpperCase() )

  const printAvenger = ( { ironman, ...rest }:Avengers ):void => {
    
    console.log( ironman, rest )
  
  };

  // printAvenger(avengers);
  //¡ Areglos
  const avengersArr:string[] = [ 'Cap. America', 'Iroman', 'Hulk' ];

  const [ capitan, iroman,] = avengersArr;

  console.log({ iroman, capitan });
})()