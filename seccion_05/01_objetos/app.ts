(()=>{

  let flash:{ name:string, age?:number, powers:string[], getName?:()=>string } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  };

  let suoperman:{ name:string, age?:number, powers:string[], getName?:()=>string } = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper velocidad']
  };

  flash = {
    name: 'Clark Kent',
    // age: 60,
    powers: ['Súper fuerza'],
    getName(){
      return this.name;
    }
  }

  console.log(flash);

})();