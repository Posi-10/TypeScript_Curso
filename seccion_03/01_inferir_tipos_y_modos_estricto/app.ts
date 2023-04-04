const a:number = 10; // tipo: number

let b; // tipo: any
b=3.1415;
b={};
b=[];
b=true;

let c: string;
/**
 * 
 * @param msg 
 */
function sayHello( msg:string ) {
    console.log( `${ msg } Miguel`)
    msg.toUpperCase();
}

(() => {
    const d:number = 15;

    console.log(d);
})()