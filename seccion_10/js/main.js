"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => (text.length > 3) ? true : false;
    Validation.validateDate = (myDate) => (isNaN(myDate.valueOf())) ? false : true;
})(Validation || (Validation = {}));
console.log(Validation.validateText('Miguel'));
//# sourceMappingURL=main.js.map