function printToConsole(constuctor: Function) {
  console.log(constuctor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => { }
  }
}

function CheckValidPokemonId() {
  return function (targer: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const OriginalMethod = descriptor.value;
    // console.log({ targer, propertyKey, descriptor })
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del Pokemon debe de estar entre 1 y 800');
      } else {
        return OriginalMethod(id);
      }
    }
  }
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

const readOnly = (isWritable: boolean = true): Function => {
  return (targer: any, propertyKey: string): PropertyDescriptor => {
    // console.log({ targer, propertyKey })
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Posi';
      },
      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }
    return descriptor;
  }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

  @readOnly(true)
  public publicApi: string = "https://pokeapi.co/api/v2/";

  constructor(
    public name: string
  ) { }

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon save to DataBase ${id}`)
  }
}