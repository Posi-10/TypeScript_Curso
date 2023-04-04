"use strict";
(function () {
    //const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 8, 10, true];
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
    var villans = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villans.forEach(function (v) { return console.log(v.toUpperCase()); });
    console.log({ number: number });
})();
