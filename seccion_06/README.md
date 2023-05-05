# ¿Que es el tsconfig?

El archivo `tsconfig.json` es el archivo de configuracion de TypeScript se se crea con el comando `tsc --init` el cual sus paraetros se definen por string, numeros, boleanos, objetos o areglos, y tambien las opciones que bienen por defecto no son las unicas reglas que se puden poner si deceas mas [información](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## Reglas o opciones de tipado en TypeScript

### 1. sourceMap

Nos permite hacer archivos `.map` y noy ayuda para las depuraciones, este formato es mas para desarrollador y no de producción.

### 2. removeComments

Remueve los comentarios al archivo final.

### 3. exclude y include

Estos parametros se pone al final del archivo por debajo de la propiedad del objeto `compilerOptions`,
el parametro `exclude` excluye los achivos selecionados por el path, y el `include` incluye los archivo selecciónados por el path.

### 4. outFile

Este parametro minifica todos los archivos `.ts` en uno o varios. deteminado el valor que se ponga.