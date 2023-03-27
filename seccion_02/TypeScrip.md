# TypeScrip

TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, lo que le brinda mejores herramientas a cualquier escala.

## Instalación

Pra la instalción se tiene que tener anteriormente instalado la aplicación de **[Node.JS](https://nodejs.org/es)**.

Y tenemos que poner el sigiente comando en la terminal:

|Sistema|Comando|
|--|--|
|Windows|`npm install -g typescript`|
|MAC_OS|`sudo npm install -g typescript`|
|Linux|`sudo npm install -g typescript`|

## Compilación manula

Para generar una compilacion de los archivos **.ts** con el comando `tsc index.ts` que compila solo el archivo seleccionado o `tsc` que compila todlos archivos del directoriao seleccionado.

## Compiación de vista

Para la compilacion automatica, es decir que al momento de que se guarde se compile de la misma madera que el muanual solo poniendo la bandera `--whatch` o `-w`. Ejamplo: `tsc --whatch`.

## tsconfig.json

Para la creacion de este archivo se usa el comando `tsc --init`, el cual nos ayuda a indicar que tan estricto puede ser el TypeScrip y de que formato se JavaScript se compila.
