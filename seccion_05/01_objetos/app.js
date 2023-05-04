"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var suoperman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad']
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Súper fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
