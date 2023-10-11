(() => {

  abstract class Mutante {

    constructor(
      public name: string,
      public realName: string
    ) {}

  }

  class Xmen extends Mutante {

    public woldSave(): string {
      return 'Mundo s salvo!!';
    }

  }

  class Villian extends Mutante {

    public conquistarMundo(): string {
      return 'Mundo conquistado!!';
    }

  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Magnus');

  // console.log(wolverine.woldSave()); 
  // console.log(magneto.conquistarMundo());

  const printName = ( charater: Mutante ) => {
    console.log( charater.realName );
  }

  // printName( wolverine );
  // printName( magneto );

}) ();