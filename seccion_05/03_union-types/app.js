"use strict";
(function () {
    var myCustomVariable = 'Posi';
    console.log(typeof myCustomVariable);
    myCustomVariable = 24;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [5]
    };
    console.log(typeof myCustomVariable);
})();
