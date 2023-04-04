"use strict";
var a = 10; // tipo: number
var b; // tipo: any
b = 3.1415;
b = {};
b = [];
b = true;
var c;
/**
 *
 * @param msg
 */
function sayHello(msg) {
    console.log("".concat(msg, " Miguel"));
    msg.toUpperCase();
}
(function () {
    var d = 15;
    console.log(d);
})();
