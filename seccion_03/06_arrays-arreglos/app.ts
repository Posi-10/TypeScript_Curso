(() => {

    //const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 8, 10, true];
    const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];

    const villans = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    villans.forEach( v => console.log( v.toUpperCase() ));

    console.log({number})
})()