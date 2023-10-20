namespace Validation {

  export const validateText = ( text: string ): boolean =>
    ( text.length > 3 ) ? true : false;

  export const validateDate = ( myDate: Date ): boolean =>
    ( isNaN( myDate.valueOf() ) ) ? false : true;

}

console.log( Validation.validateText('Miguel') );